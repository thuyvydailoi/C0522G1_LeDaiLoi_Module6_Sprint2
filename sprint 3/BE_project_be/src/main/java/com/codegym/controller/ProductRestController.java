package com.codegym.controller;

import com.codegym.dto.IProductDto;
import com.codegym.service.product.IProductService;
import com.codegym.service.product.IProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/product")
public class ProductRestController {

    @Autowired
    private IProductService iProductService;

    @Autowired
    private IProductTypeService iProductTypeService;

    @GetMapping("/list")
    public ResponseEntity<Page<IProductDto>> findAllProductAndSearch(
            @PageableDefault(value = 8) Pageable pageable,
            @RequestParam(value = "nameSearch", defaultValue = "", required = false) String nameSearch) {
        Page<IProductDto> productDtoPage = iProductService.findAllProductAndSearch(nameSearch, pageable);
        if (productDtoPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productDtoPage, HttpStatus.OK);
    }

    @GetMapping("/productByTypeList")
    public ResponseEntity<Page<IProductDto>> findAllSpiritsAndSearch(
            @PageableDefault(value = 8) Pageable pageable,
            @RequestParam(value = "nameSearch", defaultValue = "", required = false) String nameSearch,
            @RequestParam(value = "type", defaultValue = "", required = false) int type) {
        Page<IProductDto> productDtoPage = iProductService.findAllProductByTypeAndSearch(nameSearch, pageable, type);
        if (productDtoPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productDtoPage, HttpStatus.OK);
    }
}
