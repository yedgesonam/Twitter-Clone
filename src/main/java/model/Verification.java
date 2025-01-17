package model;

import jakarta.persistence.Embeddable;
import jakarta.persistence.Embedded;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Embeddable
public class Verification {
    private boolean status=false;
    private LocalDateTime startsAt;
    private LocalDateTime endsAt;
    //private String planType;


}
