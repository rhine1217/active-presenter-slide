const questionList = [
    'BI产品一般都要求3年以上经验的社招，那new grad如果想做BI产品经理应该先从BI相关的data engineer/data analyst做起，还是直接找BI产品岗（几乎没见过校招BI PM...）',
    '想了解大家如何提升自己的产品能力',
    '国外产品的团队架构是什么样的？PM、开发、UI的配比是怎么样的？',
    '和同部门其他的PM同事是如何协作的？比如说分工方式、知识管理、推锅？',
    '如果有数据分析需求的话，是以什么形式参与在实际业务中的？',
    '在国内/国外的产品岗位中，对于技术的了解程度有没有硬性指标？有什么时候会觉得“我了解到这儿就差不多了”？',
    '对于团队和产品怎么去确认自己的话语权？',
    '怎么发掘自己的技能树并点上自己的技能点？作为PM，会怎么提升自己的专业知识？',
];

let currQuesIdx = 0;
let currQues = ''

const renderQ = function() {

    if (currQuesIdx >= 0 && currQuesIdx < questionList.length) {
        currQues = questionList[currQuesIdx]; 
    } else {
        currQues = "没有问题啦！"
        if (currQuesIdx < 0) {
            currQuesIdx = -1
        } else if (currQuesIdx >= questionList.length) {
            currQuesIdx = questionList.length
        }
    }
    $('.q-text p').text(currQues)
}

const resetStatus = function() {
    $guests = $('.guest-p')
    for (let i = 0; i < $guests.length; i++) {
        $guests.eq(i).removeClass('guest-active')
        $guests.eq(i).addClass('guest-inactive')
    }
}

$('.right-nav').on('click', function(e) {
    e.preventDefault()
    currQuesIdx += 1
    renderQ()
    resetStatus()
})

$('.left-nav').on('click', function(e) {
    e.preventDefault()
    currQuesIdx -= 1
    renderQ()
    resetStatus()
})

$('.guest-p').on('click', function(e) {
    e.preventDefault()
    resetStatus()
    $(e.target).closest('.guest-p').removeClass('guest-inactive')
    $(e.target).closest('.guest-p').addClass('guest-active')
})

renderQ()
resetStatus()