/* =========================================================
   J.JINHOMME AI SCENT ANALYSIS
   Front-end recommendation engine
========================================================= */

const state = {
    currentStep: 1,

    gender: "남성",

    notes: {
        top: [],
        middle: [],
        base: []
    },

    imageAnalysis: null,

    selectedResult: null
};


/* =========================================================
   REAL PERFUME DATA
========================================================= */

const perfumes = [

    {
        id: "prada-lhomme",
        brand: "PRADA",
        name: "L'Homme Prada",
        gender: ["남성", "공용"],

        top: [
            "neroli",
            "black pepper",
            "cardamom",
            "carrot seeds"
        ],

        middle: [
            "iris",
            "violet",
            "geranium",
            "mate"
        ],

        base: [
            "amber",
            "cedar",
            "sandalwood",
            "patchouli"
        ],

        accords: [
            "clean",
            "powdery",
            "iris",
            "woody",
            "modern"
        ],

        mood: [
            "모던한",
            "세련된",
            "차분한",
            "클린한"
        ],

        description:
            "아이리스와 네롤리를 중심으로 한 깨끗하고 세련된 우디 플로럴.",

        reason:
            "정돈된 실루엣과 미니멀한 스타일에 특히 잘 어울리는 깨끗한 아이리스 계열."
    },


    {
        id: "dior-homme-intense",

        brand: "DIOR",
        name: "Dior Homme Intense 2011",

        gender: ["남성"],

        top: [
            "lavender"
        ],

        middle: [
            "iris",
            "ambrette",
            "pear"
        ],

        base: [
            "cedar",
            "vetiver"
        ],

        accords: [
            "iris",
            "powdery",
            "woody",
            "musky",
            "elegant"
        ],

        mood: [
            "우아한",
            "딥한",
            "세련된",
            "차분한"
        ],

        description:
            "아이리스의 파우더리한 중심에 시더와 베티버를 더한 깊고 우아한 향.",

        reason:
            "어두운 컬러의 수트나 드레스처럼 깊이 있는 스타일과 높은 조화를 보입니다."
    },


    {
        id: "aventus",

        brand: "CREED",
        name: "Aventus",

        gender: ["남성"],

        top: [
            "bergamot",
            "black currant",
            "apple",
            "lemon",
            "pink pepper"
        ],

        middle: [
            "pineapple",
            "patchouli",
            "moroccan jasmine"
        ],

        base: [
            "birch",
            "musk",
            "oak moss",
            "cedarwood",
            "ambroxan"
        ],

        accords: [
            "fruity",
            "citrus",
            "woody",
            "smoky",
            "fresh",
            "musky"
        ],

        mood: [
            "자신감 있는",
            "활기찬",
            "모던한",
            "도시적인"
        ],

        description:
            "베르가못과 과일의 산뜻함에 우디와 스모키한 잔향을 더한 시그니처 계열.",

        reason:
            "비즈니스 수트나 활동적인 스타일에 세련된 에너지를 더해줍니다."
    },


    {
        id: "tam-dao",

        brand: "DIPTYQUE",
        name: "Tam Dao Eau de Toilette",

        gender: ["여성", "남성", "공용"],

        top: [
            "italian cypress",
            "myrtle",
            "rose"
        ],

        middle: [
            "sandalwood",
            "cedar"
        ],

        base: [
            "rosewood",
            "spices",
            "amber",
            "white musk"
        ],

        accords: [
            "woody",
            "aromatic",
            "powdery",
            "warm spicy",
            "musk"
        ],

        mood: [
            "차분한",
            "자연스러운",
            "미니멀한",
            "고급스러운"
        ],

        description:
            "샌달우드와 시더를 중심으로 한 부드럽고 차분한 우디 머스크.",

        reason:
            "베이지, 브라운, 네이비처럼 자연스럽고 차분한 색감의 스타일과 잘 어울립니다."
    },


    {
        id: "blanche",

        brand: "BYREDO",
        name: "Blanche",

        gender: ["여성", "남성", "공용"],

        top: [
            "aldehydes",
            "rose",
            "pink pepper"
        ],

        middle: [
            "peony",
            "violet",
            "orange flower"
        ],

        base: [
            "musk",
            "wood",
            "sandalwood"
        ],

        accords: [
            "clean",
            "floral",
            "powdery",
            "musky",
            "fresh"
        ],

        mood: [
            "깨끗한",
            "소프트한",
            "미니멀한",
            "우아한"
        ],

        description:
            "화이트 셔츠처럼 깨끗하고 부드러운 머스크 플로럴.",

        reason:
            "화이트, 아이보리, 밝은 그레이 등 밝고 정돈된 스타일과 특히 잘 어울립니다."
    },


    {
        id: "terre-hermes",

        brand: "HERMÈS",
        name: "Terre d'Hermès",

        gender: ["남성"],

        top: [
            "orange",
            "grapefruit"
        ],

        middle: [
            "pepper",
            "pelargonium",
            "flint"
        ],

        base: [
            "vetiver",
            "cedar",
            "patchouli",
            "benzoin"
        ],

        accords: [
            "citrus",
            "woody",
            "earthy",
            "fresh spicy",
            "aromatic"
        ],

        mood: [
            "클래식한",
            "자연스러운",
            "지적인",
            "성숙한"
        ],

        description:
            "오렌지와 자몽의 시트러스에 베티버와 시더를 더한 클래식 우디.",

        reason:
            "클래식 테일러링과 자연스러운 소재감이 있는 착장에 특히 잘 맞습니다."
    },


    {
        id: "oud-wood",

        brand: "TOM FORD",
        name: "Oud Wood",

        gender: ["여성", "남성", "공용"],

        top: [
            "cardamom",
            "sichuan pepper"
        ],

        middle: [
            "oud",
            "sandalwood",
            "rosewood"
        ],

        base: [
            "vanilla",
            "tonka bean",
            "amber",
            "vetiver"
        ],

        accords: [
            "woody",
            "warm spicy",
            "oud",
            "amber",
            "vanilla"
        ],

        mood: [
            "럭셔리한",
            "딥한",
            "성숙한",
            "관능적인"
        ],

        description:
            "스파이시한 우드와 샌달우드, 앰버가 어우러지는 깊고 고급스러운 향.",

        reason:
            "블랙, 차콜, 딥 네이비 등 무게감 있는 스타일에 가장 강한 조화를 보여줍니다."
    },


    {
        id: "santal33",

        brand: "LE LABO",
        name: "Santal 33",

        gender: ["여성", "남성", "공용"],

        top: [
            "cardamom"
        ],

        middle: [
            "sandalwood",
            "leather",
            "papyrus",
            "cedar"
        ],

        base: [
            "amber",
            "iris",
            "violet"
        ],

        accords: [
            "woody",
            "leather",
            "powdery",
            "warm spicy",
            "iris"
        ],

        mood: [
            "힙한",
            "모던한",
            "아티스틱한",
            "도시적인"
        ],

        description:
            "샌달우드와 시더, 가죽과 아이리스가 어우러지는 개성 있는 우디 향.",

        reason:
            "미니멀하면서도 개성이 있는 모던 패션과 잘 어울립니다."
    },


    {
        id: "narciso-for-her",

        brand: "NARCISO RODRIGUEZ",
        name: "For Her Eau de Parfum",

        gender: ["여성"],

        top: [
            "rose",
            "peach"
        ],

        middle: [
            "musk",
            "amber"
        ],

        base: [
            "patchouli",
            "sandalwood"
        ],

        accords: [
            "musky",
            "rose",
            "powdery",
            "woody",
            "amber"
        ],

        mood: [
            "우아한",
            "관능적인",
            "소프트한",
            "여성스러운"
        ],

        description:
            "로즈와 피치에서 시작해 머스크와 샌달우드로 이어지는 부드러운 향.",

        reason:
            "부드러운 실루엣과 로맨틱한 컬러, 여성스러운 스타일에 자연스럽게 연결됩니다."
    },


    {
        id: "chance-eau-tendre",

        brand: "CHANEL",
        name: "Chance Eau Tendre",

        gender: ["여성"],

        top: [
            "quince",
            "grapefruit"
        ],

        middle: [
            "hyacinth",
            "jasmine"
        ],

        base: [
            "musk",
            "iris",
            "cedar",
            "amber"
        ],

        accords: [
            "floral",
            "fruity",
            "citrus",
            "musky",
            "powdery"
        ],

        mood: [
            "밝은",
            "로맨틱한",
            "소프트한",
            "우아한"
        ],

        description:
            "자몽과 퀸스의 산뜻함에 자스민과 머스크를 더한 플로럴 프루티.",

        reason:
            "밝은 컬러와 가벼운 소재, 부드러운 스타일에 잘 어울리는 향입니다."
    }

];


/* =========================================================
   DOM
========================================================= */

const steps =
    document.querySelectorAll(".step");

const progressItems =
    document.querySelectorAll(".progress-item");

const nextButton =
    document.getElementById("nextButton");

const prevButton =
    document.getElementById("prevButton");


/* =========================================================
   STEP
========================================================= */

function showStep(number) {

    state.currentStep = number;

    steps.forEach(step => {

        step.classList.toggle(
            "active",
            Number(step.dataset.step) === number
        );

    });


    progressItems.forEach((item, index) => {

        item.classList.toggle(
            "active",
            index < number
        );

    });


    updateFooter();

}


function updateFooter() {

    prevButton.style.visibility =
        state.currentStep === 1
            ? "hidden"
            : "visible";


    if (state.currentStep === 1) {

        nextButton.style.visibility = "visible";

        nextButton.innerHTML =
            `향 분석 시작 <span>→</span>`;

    }


    if (state.currentStep === 2) {

        nextButton.style.visibility = "hidden";

    }


    if (state.currentStep === 3) {

        nextButton.style.visibility = "visible";

        nextButton.innerHTML =
            `추천 저장 <span>→</span>`;

    }


    if (state.currentStep === 4) {

        nextButton.style.visibility = "visible";

        nextButton.innerHTML =
            `완료 <span>✓</span>`;

    }

}


/* =========================================================
   GENDER
========================================================= */

document
    .querySelectorAll(".gender-option")
    .forEach(button => {

        button.addEventListener("click", () => {

            document
                .querySelectorAll(".gender-option")
                .forEach(item => {

                    item.classList.remove("active");

                });

            button.classList.add("active");

            state.gender =
                button.dataset.gender;

        });

    });


/* =========================================================
   IMAGE UPLOAD
========================================================= */

const imageInput =
    document.getElementById("imageInput");

const fileButton =
    document.getElementById("fileButton");

const uploadedImage =
    document.getElementById("uploadedImage");

const uploadedPreview =
    document.querySelector(".uploaded-preview");

const uploadEmpty =
    document.getElementById("uploadEmpty");

const removeImage =
    document.getElementById("removeImage");


let uploadedFile = null;


fileButton.addEventListener("click", () => {

    imageInput.click();

});


imageInput.addEventListener(
    "change",
    event => {

        const file =
            event.target.files[0];

        if (!file) return;


        if (
            !file.type.startsWith("image/")
        ) {

            alert("이미지 파일을 선택해주세요.");

            return;

        }


        if (
            file.size >
            10 * 1024 * 1024
        ) {

            alert(
                "10MB 이하의 이미지를 선택해주세요."
            );

            return;

        }


        uploadedFile = file;


        const reader =
            new FileReader();


        reader.onload = event => {

            uploadedImage.src =
                event.target.result;

            uploadedPreview
                .classList
                .remove("hidden");

            uploadEmpty
                .classList
                .add("hidden");

        };


        reader.readAsDataURL(file);

    }
);


removeImage.addEventListener(
    "click",
    () => {

        uploadedFile = null;

        imageInput.value = "";

        uploadedImage.src = "";

        uploadedPreview
            .classList
            .add("hidden");

        uploadEmpty
            .classList
            .remove("hidden");

    }
);


/* =========================================================
   EXAMPLE IMAGE
========================================================= */

document
    .querySelectorAll(".example-image")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const img =
                    button.querySelector("img");

                if (!img) return;

                uploadedImage.src =
                    img.src;

                uploadedPreview
                    .classList
                    .remove("hidden");

                uploadEmpty
                    .classList
                    .add("hidden");

            }
        );

    });


/* =========================================================
   NOTE DATA
========================================================= */

const noteData = {

    top: {

        title: "탑 노트",

        options: [

            ["Bergamot", "상쾌하고 세련된 시트러스"],
            ["Lemon", "밝고 깨끗한 시트러스"],
            ["Grapefruit", "쌉쌀하고 산뜻한 시트러스"],
            ["Orange", "부드럽고 따뜻한 시트러스"],
            ["Apple", "싱그럽고 청량한 과일 향"],
            ["Lavender", "깨끗하고 편안한 허브 향"],
            ["Rose", "부드러운 플로럴"],
            ["Neroli", "깨끗하고 그린한 플로럴"],
            ["Cardamom", "세련된 스파이시 향"],
            ["Pink Pepper", "가볍고 톡 쏘는 스파이스"]

        ]

    },


    middle: {

        title: "미들 노트",

        options: [

            ["Iris", "파우더리하고 우아한 향"],
            ["Rose", "부드러운 플로럴"],
            ["Jasmine", "풍부하고 화사한 플로럴"],
            ["Violet", "은은한 파우더리 플로럴"],
            ["Sandalwood", "부드러운 크리미 우디"],
            ["Cedar", "드라이하고 깔끔한 우디"],
            ["Patchouli", "깊고 흙내음이 있는 우디"],
            ["Leather", "묵직하고 세련된 가죽 향"],
            ["Oud", "깊고 이국적인 우디"],
            ["Musk", "포근하고 부드러운 머스크"]

        ]

    },


    base: {

        title: "베이스 노트",

        options: [

            ["Cedar", "드라이하고 깔끔한 우디"],
            ["Sandalwood", "부드럽고 크리미한 우디"],
            ["Musk", "깨끗하고 포근한 잔향"],
            ["Amber", "따뜻하고 깊은 잔향"],
            ["Vetiver", "드라이하고 그린한 잔향"],
            ["Patchouli", "깊고 묵직한 우디"],
            ["Vanilla", "부드럽고 달콤한 잔향"],
            ["Tonka Bean", "따뜻하고 달콤한 잔향"],
            ["Leather", "깊고 관능적인 잔향"]

        ]

    }

};


const noteModal =
    document.getElementById("noteModal");

const noteModalTitle =
    document.getElementById("noteModalTitle");

const noteOptions =
    document.getElementById("noteOptions");

const noteModalClose =
    document.getElementById("noteModalClose");

const noteConfirm =
    document.getElementById("noteConfirm");


let currentNoteType = null;


document
    .querySelectorAll(".note-select")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                currentNoteType =
                    button.dataset.note;

                openNoteModal(
                    currentNoteType
                );

            }
        );

    });


function openNoteModal(type) {

    const data =
        noteData[type];

    noteModalTitle.textContent =
        data.title;

    noteOptions.innerHTML = "";


    data.options.forEach(
        option => {

            const button =
                document.createElement("button");

            button.className =
                "note-option";


            if (
                state.notes[type]
                    .includes(option[0].toLowerCase())
            ) {

                button.classList.add(
                    "selected"
                );

            }


            button.innerHTML = `
                <strong>${option[0]}</strong>
                <span>${option[1]}</span>
            `;


            button.addEventListener(
                "click",
                () => {

                    button.classList.toggle(
                        "selected"
                    );

                }
            );


            noteOptions.appendChild(
                button
            );

        }
    );


    noteModal.classList.add("active");

}


noteModalClose.addEventListener(
    "click",
    () => {

        noteModal.classList.remove(
            "active"
        );

    }
);


noteConfirm.addEventListener(
    "click",
    () => {

        const selected =
            [
                ...noteOptions.querySelectorAll(
                    ".note-option.selected"
                )
            ]
            .map(
                button =>
                    button
                        .querySelector("strong")
                        .textContent
                        .toLowerCase()
            );


        state.notes[
            currentNoteType
        ] = selected;


        updateNoteButtons();


        noteModal.classList.remove(
            "active"
        );

    }
);


function updateNoteButtons() {

    document
        .querySelectorAll(".note-select")
        .forEach(button => {

            const type =
                button.dataset.note;

            const count =
                state.notes[type].length;


            if (count > 0) {

                button.innerHTML =
                    `${count}개 선택됨 <b>✓</b>`;

            }

            else {

                button.innerHTML =
                    `선택하기 <b>›</b>`;

            }

        });

}


/* =========================================================
   IMAGE ANALYSIS
========================================================= */

async function analyzeImage(file) {

    if (!file) {

        return {
            brightness: 0.55,
            saturation: 0.25,
            warmth: 0.5,
            tags: [
                "모던한",
                "세련된"
            ]
        };

    }


    return new Promise(resolve => {

        const img =
            new Image();

        const url =
            URL.createObjectURL(file);


        img.onload = () => {

            const canvas =
                document.createElement("canvas");

            const ctx =
                canvas.getContext("2d");


            const maxSize = 300;

            const ratio =
                Math.min(
                    maxSize / img.width,
                    maxSize / img.height
                );


            canvas.width =
                img.width * ratio;

            canvas.height =
                img.height * ratio;


            ctx.drawImage(
                img,
                0,
                0,
                canvas.width,
                canvas.height
            );


            const data =
                ctx.getImageData(
                    0,
                    0,
                    canvas.width,
                    canvas.height
                ).data;


            let r = 0;
            let g = 0;
            let b = 0;


            const pixelCount =
                data.length / 4;


            for (
                let i = 0;
                i < data.length;
                i += 4
            ) {

                r += data[i];
                g += data[i + 1];
                b += data[i + 2];

            }


            r /= pixelCount;
            g /= pixelCount;
            b /= pixelCount;


            const max =
                Math.max(r, g, b);

            const min =
                Math.min(r, g, b);


            const brightness =
                (r + g + b) /
                (255 * 3);


            const saturation =
                max === 0
                    ? 0
                    : (max - min) / max;


            const warmth =
                (
                    r - b + 255
                ) / 510;


            const tags = [];


            if (brightness < 0.35) {

                tags.push(
                    "딥한",
                    "시크한"
                );

            }

            else if (brightness > 0.72) {

                tags.push(
                    "밝은",
                    "클린한"
                );

            }

            else {

                tags.push(
                    "모던한"
                );

            }


            if (saturation < 0.18) {

                tags.push(
                    "미니멀한",
                    "차분한"
                );

            }

            else if (saturation > 0.45) {

                tags.push(
                    "비비드한",
                    "활기찬"
                );

            }


            if (warmth > 0.62) {

                tags.push(
                    "웜한"
                );

            }

            else if (warmth < 0.42) {

                tags.push(
                    "쿨한"
                );

            }


            resolve({

                brightness,

                saturation,

                warmth,

                averageRGB: {
                    r,
                    g,
                    b
                },

                tags: [
                    ...new Set(tags)
                ]

            });


            URL.revokeObjectURL(url);

        };


        img.src = url;

    });

}


/* =========================================================
   NORMALIZE NOTE
========================================================= */

function normalize(value) {

    return value
        .toLowerCase()
        .replace(/[\s\-']/g, "");

}


/* =========================================================
   NOTE MATCH
========================================================= */

function noteMatch(selected, perfumeNotes) {

    if (!selected.length) return 0;


    const selectedNormalized =
        selected.map(normalize);


    const perfumeNormalized =
        perfumeNotes.map(normalize);


    let matches = 0;


    selectedNormalized.forEach(
        note => {

            if (
                perfumeNormalized.some(
                    perfumeNote =>
                        perfumeNote.includes(note) ||
                        note.includes(perfumeNote)
                )
            ) {

                matches++;

            }

        }
    );


    return (
        matches /
        selected.length
    );

}


/* =========================================================
   RECOMMENDATION ENGINE
========================================================= */

function calculateScore(perfume) {

    let score = 0;

    const reasons = [];


    /* -----------------------------
       GENDER
    ----------------------------- */

    if (
        perfume.gender.includes(
            state.gender
        )
    ) {

        score += 20;

        reasons.push(
            `${state.gender} 향수로 분류`
        );

    }

    else {

        score -= 20;

    }


    /* -----------------------------
       TOP
    ----------------------------- */

    const topScore =
        noteMatch(
            state.notes.top,
            perfume.top
        );


    if (topScore > 0) {

        score +=
            topScore * 25;

        reasons.push(
            `탑 노트 ${Math.round(
                topScore * 100
            )}% 일치`
        );

    }


    /* -----------------------------
       MIDDLE
    ----------------------------- */

    const middleScore =
        noteMatch(
            state.notes.middle,
            perfume.middle
        );


    if (middleScore > 0) {

        score +=
            middleScore * 30;

        reasons.push(
            `미들 노트 ${Math.round(
                middleScore * 100
            )}% 일치`
        );

    }


    /* -----------------------------
       BASE
    ----------------------------- */

    const baseScore =
        noteMatch(
            state.notes.base,
            perfume.base
        );


    if (baseScore > 0) {

        score +=
            baseScore * 30;

        reasons.push(
            `베이스 노트 ${Math.round(
                baseScore * 100
            )}% 일치`
        );

    }


    /* -----------------------------
       IMAGE STYLE
    ----------------------------- */

    if (
        state.imageAnalysis
    ) {

        const imageTags =
            state.imageAnalysis.tags;


        const moodMatches =
            perfume.mood.filter(
                mood =>
                    imageTags.includes(
                        mood
                    )
            ).length;


        if (moodMatches > 0) {

            score +=
                moodMatches * 5;

            reasons.push(
                `착장 무드 ${moodMatches}개 일치`
            );

        }


        /* DARK */
        if (
            state.imageAnalysis
                .brightness < 0.35
        ) {

            if (
                perfume.accords &&
                perfume.accords.includes(
                    "woody"
                )
            ) {

                score += 5;

            }

            if (
                perfume.accords &&
                perfume.accords.includes(
                    "amber"
                )
            ) {

                score += 4;

            }

        }


        /* BRIGHT */
        if (
            state.imageAnalysis
                .brightness > 0.72
        ) {

            if (
                perfume.accords &&
                (
                    perfume.accords.includes(
                        "clean"
                    ) ||
                    perfume.accords.includes(
                        "fresh"
                    )
                )
            ) {

                score += 7;

            }

        }

    }


    return {
        perfume,
        score,
        reasons
    };

}


/* =========================================================
   RUN RECOMMENDATION
========================================================= */

function getRecommendations() {

    return perfumes

        .map(calculateScore)

        .sort(
            (a, b) =>
                b.score - a.score
        )

        .slice(0, 3)

        .map(item => {

            return {
                ...item,
                percentage:
                    Math.min(
                        98,
                        Math.max(
                            55,
                            Math.round(
                                item.score
                            )
                        )
                    )
            };

        });

}


/* =========================================================
   ANALYSIS FLOW
========================================================= */

async function runAnalysis() {

    showStep(2);


    const loaderBar =
        document.getElementById(
            "loaderBar"
        );

    const loaderPercent =
        document.getElementById(
            "loaderPercent"
        );

    const status =
        document.getElementById(
            "analysisStatus"
        );


    const messages = [

        "착장 이미지를 분석하는 중...",

        "색감과 명도를 분석하는 중...",

        "스타일 무드를 분석하는 중...",

        "선택한 향조와 매칭하는 중...",

        "어울리는 향수를 찾는 중..."

    ];


    let progress = 0;


    state.imageAnalysis =
        await analyzeImage(
            uploadedFile
        );


    const timer =
        setInterval(() => {

            progress +=
                Math.floor(
                    Math.random() * 7
                ) + 4;


            if (progress >= 100) {

                progress = 100;

                clearInterval(timer);


                setTimeout(() => {

                    const results =
                        getRecommendations();


                    state.selectedResult =
                        results[0];


                    renderResults(
                        results
                    );


                    showStep(3);

                }, 500);

            }


            loaderBar.style.width =
                `${progress}%`;

            loaderPercent.textContent =
                `${progress}%`;


            const index =
                Math.min(
                    Math.floor(
                        progress / 20
                    ),
                    messages.length - 1
                );


            status.textContent =
                messages[index];

        }, 120);

}


/* =========================================================
   RESULT RENDER
========================================================= */

function renderResults(results) {

    const resultGrid = document.querySelector(".result-grid");

    if (!resultGrid) return;


    const first =
        results[0];

    state.selectedResult = first;
    const alternatives =
        results.slice(1);


    resultGrid.innerHTML = `

        <div class="result-main">

            <div class="result-perfume-image">

                <div class="perfume-placeholder">

                    <span>
                        ${first.perfume.brand}
                    </span>

                    <strong>
                        ${first.perfume.name}
                    </strong>

                </div>

            </div>


            <div class="result-info">

                <span class="result-category">

                    ${first.perfume.brand}

                </span>


                <h3>

                    ${first.perfume.name}

                </h3>


                <div class="match-score">

                    <strong>
                        ${first.percentage}%
                    </strong>

                    <span>
                        STYLE MATCH
                    </span>

                </div>


                <p>

                    ${first.perfume.description}

                </p>


                <div class="result-tags">

                    ${first.perfume.mood
                        .slice(0, 3)
                        .map(
                            mood =>
                                `<span>#${mood}</span>`
                        )
                        .join("")
                    }

                </div>


                <div class="recommend-reason">

                    <strong>
                        추천 이유
                    </strong>

                    <p>

                        ${first.perfume.reason}

                    </p>

                </div>

            </div>

        </div>


        <div class="note-result">

            <div>

                <span>
                    TOP NOTE
                </span>

                <strong>
                    ${first.perfume.top
                        .slice(0, 2)
                        .join(" · ")
                    }
                </strong>

            </div>


            <div>

                <span>
                    MIDDLE NOTE
                </span>

                <strong>
                    ${first.perfume.middle
                        .slice(0, 3)
                        .join(" · ")
                    }
                </strong>

            </div>


            <div>

                <span>
                    BASE NOTE
                </span>

                <strong>
                    ${first.perfume.base
                        .slice(0, 3)
                        .join(" · ")
                    }
                </strong>

            </div>


            <div class="alternatives">

                <span>
                    ALSO RECOMMENDED
                </span>


                ${alternatives
                    .map(
                        item => `

                        <button
                            class="alternative-card"
                            data-id="${item.perfume.id}"
                        >

                            <div>

                                <small>
                                    ${item.perfume.brand}
                                </small>

                                <strong>
                                    ${item.perfume.name}
                                </strong>

                            </div>


                            <b>
                                ${item.percentage}%
                            </b>

                        </button>

                    `
                    )
                    .join("")
                }

            </div>

        </div>

    `;


    document
        .querySelectorAll(
            ".alternative-card"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const id =
                        button.dataset.id;

                    const selected =
                        results.find(
                            result =>
                                result.perfume.id === id
                        );


                    if (!selected) return;


                    state.selectedResult =
                        selected;


                    renderResults([
                        selected,

                        ...results.filter(
                            result =>
                                result.perfume.id !== id
                        )

                    ]);

                }
            );

        });

}

function updateCompleteScreen() {
    const scentName = document.querySelector("#completeScentName");

    if (!scentName) return;

    const selected = state.selectedResult;

    if (!selected || !selected.perfume) {
        scentName.textContent = "-";
        return;
    }

    scentName.textContent = selected.perfume.name;
}
/* =========================================================
   NEXT BUTTON
========================================================= */

nextButton.addEventListener(
    "click",
    async () => {

        if (
            state.currentStep === 1
        ) {

            await runAnalysis();

            return;

        }


        if (
            state.currentStep === 3
        ) {

            showStep(4);
            updateCompleteScreen();
            return;

        }


        if (
            state.currentStep === 4
        ) {

            location.reload();

        }

    }
);


/* =========================================================
   PREVIOUS
========================================================= */

prevButton.addEventListener(
    "click",
    () => {

        if (
            state.currentStep > 1
        ) {

            showStep(
                state.currentStep - 1
            );

        }

    }
);




/* =========================================================
   INIT
========================================================= */

showStep(1);