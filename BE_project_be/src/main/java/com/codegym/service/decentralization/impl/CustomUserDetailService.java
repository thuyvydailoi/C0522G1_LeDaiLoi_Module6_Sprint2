package com.codegym.service.decentralization.impl;

import com.codegym.account.Role;
import com.codegym.account.User;
import com.codegym.repository.decentralization.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service

public class CustomUserDetailService implements UserDetailsService {

    @Autowired
    private IUserRepository iUserRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = iUserRepository.findByUsername(username);

        List<GrantedAuthority> grantedAuthorityList = new ArrayList<>();
        for (Role role : user.getRoles()) {
            grantedAuthorityList.add(new SimpleGrantedAuthority(role.getName()));
            System.out.println(role.getName());
        }

//        return new CustomUserDetail(user);
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), grantedAuthorityList);
    }
}
