const authDictionary = {



    btns: {
        continue: 'המשך',
        login: 'התחברות',
        sendMeCode: 'שלחו לי את הקוד',
        doneRegister: 'סיום הרשמה',
        startAgain: 'אוקיי, מחדש',
        save: 'שמירה',
        cancel: 'ביטול',

    },
    links: {


        toLogin: { txt: 'יש לך חשבון?', link: 'להתחברות' },

        toRegister: { txt: 'אין לך חשבון?', link: "להרשמה" },
        toTerms: { link: 'תקנון' }
    }
    ,
    titles: {

        niceToMeet: 'היי, נעים להכיר',
        goodToSeeYou: 'היי, טוב לראות אותך',
        verifyEmail: "אימות מייל",
        resetPassword: "חידוש סיסמה",
        expired: "נעלמת לנו קצת"

    }
    ,
    spanText: {
        verifyEmail: ['במידה והמייל הזה קיים,', 'שלחנו לו את קוד האימות'],
        resetPassword: 'מה המייל שלך? מיד נשלח לך את הקוד לחידוש סיסמה',
        expired: ['מסיבות אבטחה אנחנו מעדיפים'
            , 'לחדש את התהליך']
    }
    , alt: { expired: "פג תוקף ההפעלה" },
    checkBox: {
        updates: 'אני מאשר קבלת עדכונים ומבצעים מיד2',
        terms: ['קראתי ואישרתי את', 'האתר*']
    },

};

// /TODO: alts

export default authDictionary;
