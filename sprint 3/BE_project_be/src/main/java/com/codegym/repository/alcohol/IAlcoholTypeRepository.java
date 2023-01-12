package com.codegym.repository.alcohol;

import com.codegym.model.product.ProductType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IAlcoholTypeRepository extends JpaRepository<ProductType, Integer> {
}
