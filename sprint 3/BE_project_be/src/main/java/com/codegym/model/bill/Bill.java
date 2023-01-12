package com.codegym.model.bill;

import com.codegym.model.product.ProductType;

import javax.persistence.*;

@Entity
public class Bill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String createDate;
    private boolean isDelete = false;
    private Integer quantity;

    @ManyToOne
    @JoinColumn(name = "bill_type_id", referencedColumnName = "id")
    private BillType billType;

    public Bill() {
    }

    public Bill(Integer id, String createDate, boolean isDelete, Integer quantity, BillType billType) {
        this.id = id;
        this.createDate = createDate;
        this.isDelete = isDelete;
        this.quantity = quantity;
        this.billType = billType;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCreateDate() {
        return createDate;
    }

    public void setCreateDate(String createDate) {
        this.createDate = createDate;
    }

    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(boolean delete) {
        isDelete = delete;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public BillType getBillType() {
        return billType;
    }

    public void setBillType(BillType billType) {
        this.billType = billType;
    }
}
