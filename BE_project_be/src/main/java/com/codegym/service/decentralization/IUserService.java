package com.codegym.service.decentralization;





import com.codegym.account.User;

import java.util.List;
import java.util.Optional;


public interface IUserService {
    User findByUsername(String name);

//    User checkUser(String username, String password);

    Optional<User> checkUser(String username, String password);

    List<User> findAll();
}
