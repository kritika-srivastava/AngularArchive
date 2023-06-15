package com.stackroute.configuration;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ApiGatewayConfig {

	@Bean
	public RouteLocator gatewayRoutes(RouteLocatorBuilder builder) {
		return builder.routes()
						.route(r -> r.path("/api/customer/**")
									 //.uri("http://localhost:8083")
									 .uri("lb://customerapi"))
						.route(r -> r.path("/api/bank/**")
								     .uri("lb://bankapi"))
						.route(r -> r.path("/api/transaction/**")
							     	 .uri("lb://transactionapi"))
						.route(r -> r.path("/**")
						     	 	  .uri("lb://authentication-api"))
						.build();
	}
}


