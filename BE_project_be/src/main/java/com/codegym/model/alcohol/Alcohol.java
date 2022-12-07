package com.codegym.model.alcohol;

import javax.persistence.*;

@Entity
public class Alcohol {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private boolean isDelete;
    private String price;
    private Integer discount;
    private String manufacturer;
    private String image;
    private String address;
    private String phoneNumber;

    @ManyToOne
    @JoinColumn(name = "alcohol_type_id", referencedColumnName = "id")
    private AlcoholType alcoholType;

    @ManyToOne
    @JoinColumn(name = "alcohol_size_id", referencedColumnName = "id")
    private AlcoholSize alcoholSize;

    public Alcohol(Integer id, String name, boolean isDelete, String price, Integer discount, String manufacturer, String image, String address, String phoneNumber, AlcoholType alcoholType, AlcoholSize alcoholSize) {
        this.id = id;
        this.name = name;
        this.isDelete = isDelete;
        this.price = price;
        this.discount = discount;
        this.manufacturer = manufacturer;
        this.image = image;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.alcoholType = alcoholType;
        this.alcoholSize = alcoholSize;
    }

    public Alcohol() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(boolean delete) {
        isDelete = delete;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public Integer getDiscount() {
        return discount;
    }

    public void setDiscount(Integer discount) {
        this.discount = discount;
    }

    public String getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public AlcoholType getAlcoholType() {
        return alcoholType;
    }

    public void setAlcoholType(AlcoholType alcoholType) {
        this.alcoholType = alcoholType;
    }

    public AlcoholSize getAlcoholSize() {
        return alcoholSize;
    }

    public void setAlcoholSize(AlcoholSize alcoholSize) {
        this.alcoholSize = alcoholSize;
    }
}
