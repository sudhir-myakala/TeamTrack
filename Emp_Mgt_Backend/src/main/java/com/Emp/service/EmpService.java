package com.Emp.service;

import java.util.List;

import com.Emp.model.Emp;

public interface EmpService {

	
	public Emp createEmp(Emp emp);
	
	public List<Emp> getAllEmp();
	
	public Emp getEmpId(int id);
	
	public void deleteEmp(int id);
	
	public Emp updateEmp(int id,Emp emp);
}
