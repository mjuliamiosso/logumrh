package com.logumrh.service.company;

import com.logumrh.dto.company.CompanyDTO;
import com.logumrh.model.company.Company;
import com.logumrh.repository.company.CompanyRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CompanyService {

    private final CompanyRepository companyRepository;

    public CompanyService(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }

    public Company createCompany(CompanyDTO companyDTO) {
        Company company = new Company();
        company.setName(companyDTO.getName());
        company.setLegalName(companyDTO.getLegalName());
        company.setNationalId(companyDTO.getNationalId());
        company.setIndustry(companyDTO.getIndustry());
        company.setEmail(companyDTO.getEmail());
        company.setPhone(companyDTO.getPhone());
        company.setContactPerson(companyDTO.getContactPerson());
        return companyRepository.save(company);
    }

    public Optional<Company> findByNationalId(String nationalId) {
        return companyRepository.findByNationalId(nationalId);
    }

    public void deleteCompany(Long id) {
        companyRepository.deleteById(id);
    }
}
