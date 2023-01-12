package com.codegym.model.buy;

import com.codegym.model.bill.Bill;
import com.codegym.model.product.Product;
import com.codegym.model.user.User;

import javax.persistence.*;

@Entity
public class Buy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "product_id", referencedColumnName = "id")
    private Product product;

    @ManyToOne
    @JoinColumn(name = "username", referencedColumnName = "username")
    private User user;
}
