package com.rk;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;

@SpringBootApplication()
public class UserManagementModuleApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserManagementModuleApplication.class, args);
	}

}
