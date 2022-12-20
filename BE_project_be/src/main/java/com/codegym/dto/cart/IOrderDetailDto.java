package com.codegym.dto.cart;

public interface IOrderDetailDto {
    Integer getId();
    Integer getQty();
    double getPrice();
    double getSumPerOne();
    String getImage();
    String getName();
}
