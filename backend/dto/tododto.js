const tododto = (data) => {
    return {
        task: data?.task,
        completed: data?.completed
    };
};

module.exports = tododto;