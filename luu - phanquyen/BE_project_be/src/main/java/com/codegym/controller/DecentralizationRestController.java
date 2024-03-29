package com.codegym.controller;

import com.codegym.dto.decentralization.UpdatePasswordUserDto;
import com.codegym.model.decentralization.User;
import com.codegym.service.decentralization.IUserService;
import com.codegym.service.decentralization.impl.MyUserDetails;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import javax.validation.Valid;
import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

@RestController
public class DecentralizationRestController {
    @Autowired
    private IUserService userService;
    @PatchMapping("/edit")
    public ResponseEntity<?> editUser(@RequestBody @Valid UpdatePasswordUserDto userDto,
                                      BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(bindingResult.getFieldError(),
                    HttpStatus.BAD_REQUEST);
        } else {
            User user = new User();
            BeanUtils.copyProperties(userDto, user);
            String username = ((MyUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername();
            User temp = userService.findUserByUsername(username).orElse(null);
            if (new BCryptPasswordEncoder().matches(userDto.getPassword(), temp.getPassword())) {
                user.setPassword(new BCryptPasswordEncoder().encode(userDto.getNewPassword()));
                userService.updateUser(user, username);
                return new ResponseEntity<>(HttpStatus.OK);
            } else {
                String mess = "Mật khẩu không đúng";
                return new ResponseEntity<>(mess, HttpStatus.BAD_REQUEST);
            }
        }
    }


    }
