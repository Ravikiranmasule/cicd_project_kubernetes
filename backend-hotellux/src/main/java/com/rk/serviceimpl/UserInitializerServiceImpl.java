package com.rk.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.rk.entity.User;
import com.rk.repository.UserRepository;
import com.rk.constants.Role;

@Service
public class UserInitializerServiceImpl implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        createDefaultUser();
    }

    private void createDefaultUser() {
        if (userRepository.findByUsername("ravi").isEmpty()) {
            User defaultUser = new User();
            defaultUser.setUsername("ravi");
            defaultUser.setPassword(passwordEncoder.encode("ravi"));
            defaultUser.setRole(Role.ADMIN); // Set the default role if necessary

            userRepository.save(defaultUser);
        }
    }
}
