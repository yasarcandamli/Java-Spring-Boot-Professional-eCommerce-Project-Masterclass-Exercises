package com.social.media.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Objects;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class SocialProfile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "social_user")
    @JsonIgnore
    private SocialUser socialUser;

    private String description;

    public void setSocialUser(SocialUser socialUser) {
        this.socialUser = socialUser;
        if (socialUser.getSocialProfile() != this) {
            socialUser.setSocialProfile(this);
        }
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
