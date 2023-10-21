package model;

import jakarta.persistence.Cacheable;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name="book")
@Table(name="book")
@Getter
@Setter
@EqualsAndHashCode
@Cacheable(value = true)
@NoArgsConstructor
public class CityMapping extends BaseModel {

    @Column(length = 100)
    private String name;

    @Column(length = 100)
    private String center;

    @Column(length = 100)
    private String country;

    private Double lat;

    private Double lng;

    private Long regionId;
    @Column(length = 100)
    private String regionName;


}
