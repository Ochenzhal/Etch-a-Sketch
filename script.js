const gridContainer = document.getElementById('grid-container');

let containerWidth = getComputedStyle(gridContainer).width

function createGrid(gridSize) {
  for(let i = 0; i < gridSize; i++) {
    for(let j = 0; j < gridSize; j++) {
      let gridItem = document.createElement('div')
      gridItem.classList.add('grid-item')

      let gridItemSize = Math.floor(containerWidth.replace('px', '') / gridSize)
      gridItem.style.width = gridItemSize + 'px'
      gridItem.style.height = gridItemSize + 'px'

      gridContainer.appendChild(gridItem)
    }
  }
}

createGrid(16)

gridContainer.addEventListener('mouseover', (e) => {
  e.stopPropagation()
  e.target.style.backgroundColor = 'purple'

  setTimeout(() => {
    e.target.style.backgroundColor = ''
  }, 250)
})