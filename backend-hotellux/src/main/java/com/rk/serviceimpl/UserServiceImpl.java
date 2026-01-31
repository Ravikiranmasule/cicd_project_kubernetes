package com.rk.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import com.rk.entity.User;
import com.rk.repository.UserRepository;
import com.rk.service.UserService;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;
    
    private static final String DEFAULT_USERNAME = "ravi";

    public User registerUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
    }

    @Override
    public User findByUsername(String username) {
        return userRepository.findByUsername(username)
                             .orElseThrow(() -> new RuntimeException("User not found"));
    }

	@Override
	public List<User> getAllUsers() {
		
		return userRepository.findAll();
	}

	@Override
    public void deleteUser(Long id) {
        User user = userRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("User not found"));

        if (DEFAULT_USERNAME.equals(user.getUsername())) {
            throw new RuntimeException("Cannot delete the default user");
        }

        userRepository.deleteById(id);
    }
	
	 @Override
	    public User updateUser(Long id, User updatedUser) {
	        User existingUser = userRepository.findById(id)
	            .orElseThrow(() -> new RuntimeException("User not found"));

	        if (DEFAULT_USERNAME.equals(existingUser.getUsername())) {
	            throw new RuntimeException("Cannot update the default user");
	        }

	        existingUser.setUsername(updatedUser.getUsername());
	        existingUser.setRole(updatedUser.getRole());

	        if (updatedUser.getPassword() != null && !updatedUser.getPassword().isEmpty()) {
	            existingUser.setPassword(passwordEncoder.encode(updatedUser.getPassword()));
	        }

	        return userRepository.save(existingUser);
	    }
	

}
