package com.codegym.controller;

import com.codegym.dto.cart.IOrderDetailDto;
import com.codegym.dto.cart.ITotalDto;
import com.codegym.service.order.IOrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/cart")
public class OrderRestController {
}
