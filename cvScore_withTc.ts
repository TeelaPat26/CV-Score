// with total cholesterol (tc)

// male -> sex = 1, has diabetes -> dm = 1, current smoker -> smoke = 1, else = 0

let cvScoreWithTc = function(age: number, sex: number, smoke: number, dm: number, sbp: number, tc: number){
    let fullScore: number, chance: number;
    fullScore = (0.08183 * age) + (0.39499 * sex) + (0.02084 * sbp) + (0.69974 * dm) + (0.002124 * tc) + (0.41916 * smoke);
    chance = (1 - (Math.pow(0.964588, Math.exp(fullScore - 7.044233)))) * 100;
    console.log("Your cardiovascular risk is " + chance + " %.")
    return chance;
};
cvScoreWithTc(30, 0, 0, 0, 120, 200); // 30 year, female, not smoke, no diabetes, spb = 120, total cholesterol = 200 