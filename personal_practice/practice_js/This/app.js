const person = {
  firstName: "Viggo",
  lastName: "Mortensen",
  fullName: function () {
    //위는 정규표현식 함수로
    //화살표함수로   fullName: () => {
    // console.log(this);
    return `${this.firstName} ${this.lastName}`;
  },
  shoutName: function () {
    setTimeout(() => {
      console.log(this);
      console.log(this.fullName());
    }, 3000);
  },
};
