let imputDirection = { x: 0, y: 0 }
let lastImputDirection = { x: 0, y: 0}

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if(lastImputDirection.y !== 0) break
            imputDirection = { x: 0, y: -1 }
            break
        case 'ArrowDown':
            if(lastImputDirection.y !== 0) break
            imputDirection = { x: 0, y: 1 }
            break
        case 'ArrowLeft':
            if(lastImputDirection.x !== 0) break
            imputDirection = { x: -1, y: 0 }
            break
        case 'ArrowRight':
            if(lastImputDirection.x !== 0) break
            imputDirection = { x: 1, y: 0 }
            break
    }
})

export function getInputDirection() {
    lastImputDirection = imputDirection
    return imputDirection
}