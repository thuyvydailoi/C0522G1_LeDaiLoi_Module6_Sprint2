package com.codegym.service.product;

import com.codegym.dto.IProductDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IProductService {
    Page<IProductDto> findAllProductAndSearch(String nameSearch, Pageable pageable);

    Page<IProductDto> findAllProductByTypeAndSearch(String nameSearch, Pageable pageable, int type);
}
