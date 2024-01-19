enum Membership {
    Simple, 
    Standart,
    Premium
}

const membership = Membership.Standart
//1
console.log(membership)
const membershipReverse = Membership[1]
//Standart
console.log(membershipReverse)

enum SocialMedia {
    VK = 'VK',
    FACEBOOK = "FACEBOOK",
    INSTAGRAM = "INSTAGRAM"
}

const social = SocialMedia.INSTAGRAM
//INSTAGRAM
console.log(social)