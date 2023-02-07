package com.codegym.service.product.impl;

import com.codegym.model.product.ProductType;
import com.codegym.service.product.IProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductTypeService implements IProductTypeService {
    @Autowired
    private IProductTypeService iProductTypeService;

    public List<ProductType> findAll() {
        return iProductTypeService.findAll();
    }

}
