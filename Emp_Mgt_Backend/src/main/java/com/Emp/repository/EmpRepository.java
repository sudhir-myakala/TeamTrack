package com.Emp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Emp.model.Emp;

public interface EmpRepository extends JpaRepository<Emp,Integer> {

}