const questionList = [
    {
        subtitle: '产品经理是……？',
        questions: ['我所在公司对产品经理的定义', '国内产品经理眼花缭乱的职位之间到底有什么区别？'],
    },

    {
        subtitle: '产品经理的工作日常',
        questions:[
        '产品经理的一天都在做什么？花在每类事情上的时间分布是？每天总工作时长为多久？', '产品经理最重要的工作技能是什么？', '产品经理最经常使用的工具是什么？']
    },

    {
        subtitle: '产品经理的酸甜苦辣',
        questions: ['工作里，我最有成就感的事情是……',
            '工作里，最让我烦恼和头秃的事情是……我最不喜欢的工作内容是……'
        ],
    },
     {
         subtitle:'我们是产品经理，我们都是女孩子',
         questions: ['所在公司人员性别/种族比例', '女性产品经理的职业天花板',
         '职业发展道路思考'],
    },
    {
        subtitle:'作为产品经理，我这样点亮技能树',
        questions: ['非技术出身产品经理对技术该有什么程度的了解', '非技术出身产品经理如何避免成为传话筒', '产品经理如何提升产品能力和专业知识? 怎么发掘自己的技能树并点上技能点？'],
    },
    {
        subtitle: '和我一起来做产品经理吧!',
        questions: ['产品经理所需要的性格特质','如何找到第一份实习; 如何找到一份工作', '作为数据科学家/分析师/程序媛/设计师，如何转行成为产品经理'],
    },
];

let currQuesIdx = 0;
let currQues = ''

const renderQ = function() {

    $('.q-text ul').empty()

    if (currQuesIdx >= 0 && currQuesIdx < questionList.length) {
        currQues = questionList[currQuesIdx]; 
    } else {
        currQues = "没有问题啦！"
        if (currQuesIdx < 0) {
            currQuesIdx = -1
        } else if (currQuesIdx >= questionList.length) {
            currQuesIdx = questionList.length
        }
        $('.q-text p').text(currQues)
        return
    }

    $('.q-text p').text(currQues.subtitle)

    currQues.questions.forEach(function(question) {
        $('.q-text ul').append(`<li>${question}</li>`)
    })
}

const resetStatus = function() {
    $guests = $('.guest-p')
    for (let i = 0; i < $guests.length; i++) {
        $guests.eq(i).removeClass('guest-active')
        $guests.eq(i).addClass('guest-inactive')
    }
}

const resetQColor = function() {
    $ques = $('li')
    for (let i = 0; i < $ques.length; i++) {
        $ques.eq(i).removeClass('q-primary')
    }
}

$('.right-nav').on('click', function(e) {
    e.preventDefault()
    currQuesIdx += 1
    renderQ()
    resetQColor()
    resetStatus()
})

$('.left-nav').on('click', function(e) {
    e.preventDefault()
    currQuesIdx -= 1
    renderQ()
    resetQColor()
    resetStatus()
})

$('.guest-p').on('click', function(e) {
    e.preventDefault()
    resetStatus()
    $(e.target).closest('.guest-p').removeClass('guest-inactive')
    $(e.target).closest('.guest-p').addClass('guest-active')
})

$('ul').on('click', function(e) {
    e.preventDefault()
    resetQColor()
    $(e.target).addClass('q-primary')
})

renderQ()
resetStatus()
resetQColor()