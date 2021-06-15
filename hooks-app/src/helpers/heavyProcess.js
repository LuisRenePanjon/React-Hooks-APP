export const heavyProcess = ( iter ) => {
    for (let i = 0; i < iter; i++) {
        console.log('running...');
    }

    return `${ iter } iter realized`;
}