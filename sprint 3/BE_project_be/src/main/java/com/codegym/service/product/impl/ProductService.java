package com.codegym.service.product.impl;

import com.codegym.dto.IProductDto;
import com.codegym.service.product.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductService iProductService;

    @Override
    public Page<IProductDto> findAllProductAndSearch(String nameSearch, Pageable pageable) {
        return iProductService.findAllProductAndSearch(nameSearch, pageable);
    }

    @Override
    public Page<IProductDto> findAllProductByTypeAndSearch(String nameSearch, Pageable pageable, int type) {
        return iProductService.findAllProductByTypeAndSearch(nameSearch, pageable, type);
    }
}
