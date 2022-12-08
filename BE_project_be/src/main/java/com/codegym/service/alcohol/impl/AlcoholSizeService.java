package com.codegym.service.alcohol.impl;

import com.codegym.model.alcohol.AlcoholSize;
import com.codegym.repository.alcohol.IAlcoholSizeRepository;
import com.codegym.service.alcohol.IAlcoholSizeService;

import java.util.List;

public class AlcoholSizeService implements IAlcoholSizeService {

    private IAlcoholSizeRepository iAlcoholSizeRepository;
    @Override
    public List<AlcoholSize> findAll() {
        return iAlcoholSizeRepository.findAll();
    }
}
