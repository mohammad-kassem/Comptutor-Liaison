export function selectedSubject(id, subject, image, selectedSubjects, setSelectedSubjects) {
    const selectedSubject = {"id": id, "subject": subject, "image": image}
    setSelectedSubjects([...selectedSubjects, selectedSubject])
}

export function deselectedSubject(id, subject, selectedSubjects, setSelectedSubjects) {
    setSelectedSubjects(selectedSubjects.filter((selectedSubject)=>(
            selectedSubject.id !== id
        ))
    )
}

export function handleSelect(id, subject, image, selectedSubjects, setSelectedSubjects){
    selectedSubjects.some((selectedSubject) => selectedSubject.id === id) ? deselectedSubject(id, subject, selectedSubjects, setSelectedSubjects)
    : selectedSubject(id, subject, image, selectedSubjects, setSelectedSubjects)
}

export function isSelected(id, selectedSubjects){
    let found = false;
    selectedSubjects.forEach((selectedSubject) => {
        if (selectedSubject.id === id) found = true
    });
    return found
}