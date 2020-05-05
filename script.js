function handleSubmit() {
    let glass = document.getElementById("glass").value
    let sticks = document.getElementById("sticks").value
    let thunder = document.getElementById("thunder").value
    let obama = document.getElementById("obama").value
    let ABS = document.getElementById("ABS").value
    let sftware = document.getElementById("sftware").value

    let q1 = document.getElementById("q1")
    let q2 = document.getElementById("q2")
    let q3 = document.getElementById("q3")
    let q4 = document.getElementById("q4")
    let q5 = document.getElementById("q5")
    let q6 = document.getElementById("q6")
    let totalQuestions = 6
    let correctAnswers = 0
    if (glass === "half full" || glass === "half empty" || glass=== "Half full" || glass=== "Half empty") {
        q1.innerHTML = "correct"
        q1.style.backgroundColor = "green"
        correctAnswers += 1
    } else {
    q1.innerHTML = "incorrect"
        q1.style.backgroundColor = "red"
    }

    if (sticks === "4" || sticks === "3" || sticks === "four" || sticks === "three") {
        q2.innerHTML = "correct"
        q2.style.backgroundColor = "green"
        correctAnswers += 1
    } else {
    q2.innerHTML = "incorrect"
        q2.style.backgroundColor = "red"
    }

    if (thunder === "ACDC" || thunder === "AC/DC") {
        q3.innerHTML = "correct"
        q3.style.backgroundColor = "green"
        correctAnswers += 1
    } else {
    q3.innerHTML = "incorrect"
        q3.style.backgroundColor = "red"
    }

    if (obama === "Barrack Obama" || obama === "Obama") {
        q4.innerHTML = "correct"
        q4.style.backgroundColor = "green"
        correctAnswers += 1
    } else {
    q4.innerHTML = "incorrect"
        q4.style.backgroundColor = "red"
    }

    if (ABS === "ABS" || glass === "Anti-Braking-System" || ABS ==="Anti Braking System") {
        q5.innerHTML = "correct"
        q5.style.backgroundColor = "green"
        correctAnswers += 1
    } else {
    q5.innerHTML = "incorrect"
        q5.style.backgroundColor = "red"
    }

    if (sftware === "Atom.io" || sftware === "Visual Studio Code" || sftware === "Vscode") {
        q6.innerHTML = "correct"
        q6.style.backgroundColor = "green"
        correctAnswers += 1
    } else {
    q6.innerHTML = "incorrect"
        q6.style.backgroundColor = "red"
    }


    let percentage = (correctAnswers / totalQuestions) * 100
    let p = document.getElementById("percentage")
    p.innerHTML = correctAnswers+"/"+totalQuestions+" "+percentage+"%"

    document.getElementById("thisQuizHasJustWastedYourTime").innerHTML="This Quiz Has Just Wasted Your Time!"

    return false
}




