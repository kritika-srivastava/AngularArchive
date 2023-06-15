package com.stackroute;

import java.util.Arrays;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import com.stackroute.filter.CustomerFilter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import java.util.Arrays;
import java.util.List;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;


@EnableEurekaClient
@SpringBootApplication

public class CustomerApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(CustomerApiApplication.class, args);
	}


//	@Bean
//	public FilterRegistrationBean getFilter() {
//		
//		UrlBasedCorsConfigurationSource corsConfig = new UrlBasedCorsConfigurationSource();
//		
//		List<String> all = Arrays.asList("*");
//		
//		CorsConfiguration config = new CorsConfiguration();
//		config.setAllowCredentials(true);
//		config.setAllowedHeaders(all);
//		config.setAllowedOrigins(all);
//		config.setAllowedMethods(all);
//		
//		corsConfig.registerCorsConfiguration("/**", config);
//		
//		FilterRegistrationBean filterBean = 
//				new FilterRegistrationBean(new CorsFilter(corsConfig));
//		
//		filterBean.setFilter(new CustomerFilter());
//		filterBean.addUrlPatterns("/api/*");
//		
//		return filterBean;
//		
//	}

}
