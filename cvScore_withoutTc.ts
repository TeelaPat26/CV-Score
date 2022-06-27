// with no total cholesterol (tc)

// male -> sex = 1, has diabetes -> dm = 1, current smoker -> smoke = 1, else = 0 
// wc = waist circumference ( unit -> inch )
// bdh = body height ( unit -> cm)

let cvScoreWithoutTc = function(age: number, sex: number, smoke: number, dm: number, sbp: number, wc: number, bdh: number){
    let fullScore: number, chance: number;
    fullScore = (0.079 * age) + (0.1276 * sex) + (0.019351 * sbp) + (0.58454 * dm) + (3.51256 * (wc * 2.5)/bdh ) + (0.459 * smoke);
    chance = (1 - (Math.pow(0.964588, Math.exp(fullScore - 7.712325)))) * 100;
    console.log("Your cardiovascular risk is " + chance + " %.");
    return chance;
};
cvScoreWithoutTc(30, 0, 0, 0, 120, 40, 160); // 30 age, female, not smoke, no diabetes, spb = 120, wc = 40 inch, height = 160

