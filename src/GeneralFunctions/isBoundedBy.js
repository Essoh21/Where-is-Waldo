const isBoundedBy = (element, leftBorn, rightBorn) => {
    let result = false;
    if ((element >= leftBorn) && (element <= rightBorn)) {
        result = true;
    }
    return result;
}

export default isBoundedBy;