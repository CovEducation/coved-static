interface mentorAccount {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    partnered: boolean,
    matched: boolean,
    /*the sign up date*/
    subject: string[], 
    ageMax: number, 
    ageMin: number,
    score: number
}

interface menteeAccount {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    partnered: boolean,
    subject: string[],
    age: number,
    score: number
}
function matched(mentorList: mentorAccount[]){
    for(var i = 0; i < mentorList.length; i++){
        if(mentorList[i].matched==true){
            mentorList[i].score -=80
        }
    }
}
function ageMatchmaking(mentee: menteeAccount, mentorList: mentorAccount[]){
    for(var i = 0; i < mentorList.length; i++){
        if (mentee.age > mentorList[i].ageMax){
            mentorList[i].score -=8
        }
        if (mentee.age <= mentorList[i].ageMax){
            mentorList[i].score +=8
        }
        if (mentee.age > mentorList[i].ageMin){
            mentorList[i].score -=8
        }
        if (mentee.age <= mentorList[i].ageMin){
            mentorList[i].score +=8
        }
        
    } 
}
function scoreClear(mentorList: mentorAccount[]){
    for(var i = 0; i< mentorList.length; i++){
        mentorList[i].score=0
    }
}
function subjectMatch(mentee: menteeAccount, mentorList: mentorAccount[]){
    
    for(var mentor = 0; mentor< mentorList.length; mentor++){
        for(var menteeSubject = 0; menteeSubject < mentee.subject.length; menteeSubject++){
            var mentorSubject = 0;
            while(mentorSubject <mentorList[mentor].subject.length){
            mentorSubject++;
            var cycleCounter = 0; 
               if(mentorList[mentor].subject[mentorSubject]==mentee.subject[menteeSubject]){
                    if (cycleCounter == 0){
                        mentorList[mentor].score+=6;
                    }
                    else if (cycleCounter == 1){
                        mentorList[mentor].score+=3;
                    }
                    else if (cycleCounter == 2){
                        mentorList[mentor].score+=2;
                    }
                    else {
                        mentorList[mentor].score+=1;
                    }
                }
                cycleCounter += 1;    
            }
        }
    }
}
function partneredCheck(mentee: menteeAccount[]){
    for (var i = 0; i < mentee.length; i++){
        if (mentee[i].partnered == true)
            mentee[i].score += 10;
    }
}
function topThree(mentorList: mentorAccount[]){
    let sortedMentorList = mentorList.sort((a,b) => (a.score < b.score) ? 1 :-1);
    let topThree = [sortedMentorList[0],sortedMentorList[1], sortedMentorList[2]];
    return(topThree);
}
var mentee: menteeAccount[] = [
    {
        firstName: "John",
        lastName: "Smith",
        email: "Iloveemails",
        password: "****",
        partnered: false,
        subject: ["math", "ap euro", "spanish"],
        age: 15,
        score: 0
    }
]


/*//////////////////////////////////////////////////////test subjects////////////////////////////////////////////////////////////////*/
var mentors: mentorAccount[] = [
    {
        firstName: "Mentor1",
        lastName: "1",
        email: "mentor1@example.com",
        password: "passment1",
        partnered: false,
        matched: true,
        subject: ["math", "ap euro", "spanish"],
        ageMax: 14,
        ageMin: 10,
        score: 0
    },
    {
        firstName: "Mentor2",
        lastName: "2",
        email: "mentor2@example.com",
        password: "passment2",
        partnered: false,
        matched: true,
        subject: ["english", "ap euro", "poe"],
        ageMax: 14,
        ageMin: 10,
        score: 0
    },
    {
        firstName: "Mentor3",
        lastName: "3",
        email: "mentor3@example.com",
        password: "passment3",
        partnered: false,
        matched: true,
        subject: ["math", "ap euro", "spanish"],
        ageMax: 16,
        ageMin: 10,
        score: 0
    },
    {
        firstName: "Mentor4",
        lastName: "4",
        email: "mentor4@example.com",
        password: "passment4",
        partnered: false,
        matched: true,
        subject: ["math", "english", "spanish"],
        ageMax: 14,
        ageMin: 10,
        score: 0
    },
    {
        firstName: "Mentor5",
        lastName: "5",
        email: "mentor5@example.com",
        password: "ilovepasswords",
        partnered: false,
        matched: true,
        subject: ["math", "ap euro", "spanish"],
        ageMax: 14,
        ageMin: 10,
        score: 0
    },
]
scoreClear(mentors);
ageMatchmaking(mentee[0], mentors);
subjectMatch(mentee[0], mentors)
console.log(topThree(mentors));