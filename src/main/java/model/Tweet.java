package model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class Tweet {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long id;

    @ManyToOne
    private User user;

    private String content;
    private String image;
    private String video;

    @OneToMany(mappedBy = "tweet",cascade = CascadeType.ALL)
    private List<Likes> likes = new ArrayList<>();

    @OneToMany
    private List<Tweet> replyTweet = new ArrayList<>();

    @ManyToMany
    private List<User> reTweetUser = new ArrayList<>();

    @ManyToOne
    private Tweet replyFor;

    private boolean isReply;
    private boolean isTweet;









}
