package com.codegym.controller;

import com.codegym.dto.IAlcoholDto;
import com.codegym.model.alcohol.AlcoholSize;
import com.codegym.model.alcohol.AlcoholType;
import com.codegym.repository.alcohol.IAlcoholRepository;
import com.codegym.repository.alcohol.IAlcoholSizeRepository;
import com.codegym.repository.alcohol.IAlcoholTypeRepository;
import com.codegym.service.alcohol.IAlcoholService;
import com.codegym.service.alcohol.IAlcoholSizeService;
import com.codegym.service.alcohol.IAlcoholTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/alcohol")
public class AlcoholRestController {
    @Autowired
    private IAlcoholService iAlcoholService;

    @Autowired
    private IAlcoholTypeService iAlcoholTypeService;

    @Autowired
    private IAlcoholSizeService iAlcoholSizeService;

    @GetMapping("/list")
    public ResponseEntity<Page<IAlcoholDto>> findAllAlcoholAndSearch(
            @PageableDefault(value = 5) Pageable pageable,
            @RequestParam(value = "nameSearch", defaultValue = "", required = false) String nameSearch) {
        Page<IAlcoholDto> alcoholDtoPage = iAlcoholService.findAllAlcoholAndSearch(nameSearch, pageable);
        if (alcoholDtoPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(alcoholDtoPage, HttpStatus.OK);
    }

    @GetMapping("/type-list")
    public ResponseEntity<List<AlcoholType>> findAllAlcoholType() {
        List<AlcoholType> alcoholTypes = iAlcoholTypeService.findAll();
        if (alcoholTypes.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(alcoholTypes, HttpStatus.OK);
    }
    @GetMapping("/size-list")
    public ResponseEntity<List<AlcoholSize>> findAllAlcoholSize() {
        List<AlcoholSize> alcoholSizes = iAlcoholSizeService.findAll();
        if (alcoholSizes.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(alcoholSizes, HttpStatus.OK);
    }

    @GetMapping("/find-by-id/{id}")
    public ResponseEntity<?> findByIdAlcohol(@PathVariable Integer id) {
        Optional<IAlcoholDto> alcoholDtoOptional = iAlcoholService.findByIdAlcohol(id);
        if (alcoholDtoOptional.isPresent()) {
            return new ResponseEntity<>(alcoholDtoOptional, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
