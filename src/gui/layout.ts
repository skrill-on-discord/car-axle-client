import { CREATOR, ENV, ITERATION, VERSION } from '../constants'

export const layout = `
<div class="center-content w-max h-max font-main color-white fixed z-max">
<div class="h-80 fixed w-80 layer1 z-max rounded-md" id="app-fuk-u">
<div id="app-status" class="rounded-md">
v${VERSION}.${ITERATION} ${CREATOR}
</div>
</div>
</div>
`