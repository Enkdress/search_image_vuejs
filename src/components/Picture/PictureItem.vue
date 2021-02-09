<template>
  <div
    :style="{ width: styles.width + 'px', height: styles.height + 'px' }"
    class="card"
  >
    <div class="card-image">
      <img :src="hitInfo.webformatURL" :alt="hitInfo.tags" />
    </div>
    <div class="card-description hidden">
      <h4>
        {{ hitInfo.user }}
      </h4>
      <div id="description-info">
        <h4>
          <img
            src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik03OS4xMiwxMC4zMmMtMS44OTQ2OSwwIC0zLjQ0LDEuNTQ1MzEgLTMuNDQsMy40NHYyNi42NmwtMTcuMiwzNC40di02LjAyYzAsLTEuODk0NjkgLTEuNTQ1MzEsLTMuNDQgLTMuNDQsLTMuNDRoLTQ0LjcyYy0wLjk4MDk0LDAgLTEuOTIxNTYsMC40NDM0NCAtMi41OCwxLjE4MjVjLTAuNjU4NDQsMC43MzkwNiAtMC45ODA5NCwxLjcwNjU2IC0wLjg2LDIuNjg3NWwxMC4zMiw4Mi41NmMwLjIxNSwxLjcyIDEuNzA2NTYsMy4wMSAzLjQ0LDMuMDFoMzQuNGMxLjg5NDY5LDAgMy40NCwtMS41MzE4NyAzLjQ0LC0zLjQ0di0zLjQ0aDMuOTc3NWMxLjQyNDM4LDQuMDA0MzggNS4yOTQzOCw2Ljg4IDkuNzgyNSw2Ljg4aDY1LjM2YzcuNTkyMTksMCAxMy43NiwtNi4xNjc4MSAxMy43NiwtMTMuNzZjMCwtMi44MzUzMSAtMC45MDAzMSwtNS40NDIxOSAtMi4zNjUsLTcuNjMyNWM1LjM2MTU2LC0xLjg4MTI1IDkuMjQ1LC03LjAxNDM3IDkuMjQ1LC0xMy4wMDc1YzAsLTMuMzcyODEgLTEuMjA5MzcsLTYuNDIzMTIgLTMuMjI1LC04LjgxNWMzLjk5MDk0LC0yLjQwNTMxIDYuNjY1LC02LjgyNjI1IDYuNjY1LC0xMS44MjVjMCwtMy4zNzI4MSAtMS4yMDkzNywtNi40MjMxMiAtMy4yMjUsLTguODE1YzMuOTkwOTQsLTIuNDA1MzEgNi42NjUsLTYuODI2MjUgNi42NjUsLTExLjgyNWMwLC03LjU5MjE5IC02LjE2NzgxLC0xMy43NiAtMTMuNzYsLTEzLjc2aC01MC4zMWMyLjA5NjI1LC02LjYzODEyIDUuNTksLTE4LjUxNjg3IDUuNTksLTI0LjA4YzAsLTEyLjk1Mzc1IC05LjQ4Njg3LC0zMC45NiAtMTguODEyNSwtMzAuOTZ6TTgyLjU2LDE3LjJoNS4yNjc1YzMuMTU3ODEsMCAxMS45MzI1LDExLjk3MjgxIDExLjkzMjUsMjQuMDhjMCw1LjM4ODQ0IC00LjgxMDYyLDIwLjkyMjE5IC02LjY2NSwyNi40NDVjLTAuMzYyODEsMS4wNDgxMyAtMC4yMTUsMi4yMTcxOSAwLjQzLDMuMTE3NWMwLjY0NSwwLjkwMDMxIDEuNjkzMTMsMS4zOTc1IDIuNzk1LDEuMzk3NWg1NS4wNGMzLjc4OTM4LDAgNi44OCwzLjA5MDYzIDYuODgsNi44OGMwLDMuNzg5MzggLTMuMDkwNjIsNi44OCAtNi44OCw2Ljg4aC0zLjQ0Yy0xLjkwODEyLDAgLTMuNDQsMS41MzE4OCAtMy40NCwzLjQ0YzAsMS45MDgxMyAxLjUzMTg4LDMuNDQgMy40NCwzLjQ0YzMuNzg5MzgsMCA2Ljg4LDMuMDkwNjMgNi44OCw2Ljg4YzAsMy43ODkzOCAtMy4wOTA2Miw2Ljg4IC02Ljg4LDYuODhoLTMuNDRjLTEuOTA4MTIsMCAtMy40NCwxLjUzMTg4IC0zLjQ0LDMuNDRjMCwxLjkwODEzIDEuNTMxODgsMy40NCAzLjQ0LDMuNDRjMy43ODkzOCwwIDYuODgsMy4wOTA2MyA2Ljg4LDYuODhjMCwzLjc4OTM4IC0zLjA5MDYyLDYuODggLTYuODgsNi44OGgtNi44OGMtMS45MDgxMiwwIC0zLjQ0LDEuNTMxODggLTMuNDQsMy40NGMwLDEuOTA4MTMgMS41MzE4OCwzLjQ0IDMuNDQsMy40NGMzLjc4OTM4LDAgNi44OCwzLjA5MDYzIDYuODgsNi44OGMwLDMuNzg5MzggLTMuMDkwNjIsNi44OCAtNi44OCw2Ljg4aC02NS4zNmMtMS44OTQ2OSwwIC0zLjQ0LC0xLjU0NTMxIC0zLjQ0LC0zLjQ0YzAsLTEuOTA4MTIgLTEuNTQ1MzEsLTMuNDQgLTMuNDQsLTMuNDRoLTYuODh2LTU4LjQ4aDEuNzJjMS4zMDM0NCwwIDIuNTI2MjUsLTAuNzY1OTQgMy4xMTc1LC0xLjkzNWwxOC45MiwtMzcuODRjMC4yNDE4OCwtMC40NzAzMSAwLjMyMjUsLTAuOTY3NSAwLjMyMjUsLTEuNTA1ek0xNC4xOSw3Mi4yNGgzNy40MXY3NS42OGgtMjcuOTV6TTM5LjU2LDEzMC43MmMtMi44NDg3NSwwIC01LjE2LDIuMzExMjUgLTUuMTYsNS4xNmMwLDIuODQ4NzUgMi4zMTEyNSw1LjE2IDUuMTYsNS4xNmMyLjg0ODc1LDAgNS4xNiwtMi4zMTEyNSA1LjE2LC01LjE2YzAsLTIuODQ4NzUgLTIuMzExMjUsLTUuMTYgLTUuMTYsLTUuMTZ6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
            alt="like"
          />
          {{ hitInfo.likes }}
        </h4>
        <h4>
          <img
            src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik04NiwxLjI0MDM4Yy00Ni4zMDc2OSwwIC04NC43NTk2MiwzMy40OTAzOCAtODQuNzU5NjIsNzUuNjYzNDZjMCwxOS44MjAzMSA5LjMwMjg4LDM3LjI2MzIyIDIzLjE1Mzg1LDUwLjY0OTA0Yy0wLjU0MjY3LDcuNjc0ODggLTQuMzkzMDMsMTIuMjQ4OCAtOS43MTYzNSwxNi43NDUxOWMtMi44NjgzOSwyLjQwMzI0IC02LjAyMTAzLDQuNjUxNDQgLTguODg5NDIsNy40NDIzMWMtMi44NjgzOSwyLjc5MDg3IC01Ljc4ODQ2LDYuNTYzNzEgLTUuNzg4NDYsMTEuNzgzNjVjMCwzLjAyMzQ0IDIuMDQxNDcsNS42NTkyNiA0Ljk2MTU0LDYuNDA4NjVjMTIuNDI5NjksMy4zMzM1MyAyNS43ODk2NywwLjg3ODYxIDM4LjAzODQ2LC0zLjUxNDQyYzExLjAwODQyLC0zLjk1MzcyIDIwLjMzNzE0LC05LjgxOTcxIDI3LjcwMTkyLC0xNS41MDQ4MWM0Ljk4NzM4LDAuODI2OTIgMTAuMDI2NDQsMS40NDcxMiAxNS4yOTgwOCwxLjQ0NzEyYzQ2LjMwNzY5LDAgODQuNzU5NjIsLTMzLjMwOTQ5IDg0Ljc1OTYyLC03NS40NTY3M2MwLC00Mi4xNDcyNCAtMzguNDUxOTIsLTc1LjY2MzQ2IC04NC43NTk2MiwtNzUuNjYzNDZ6TTg2LDE0LjQ3MTE1YzQwLjAwMjQsMCA3MS41Mjg4NSwyOC4zNzM4IDcxLjUyODg1LDYyLjQzMjY5YzAsMzQuMDU4OSAtMzEuNTI2NDQsNjIuMjI1OTYgLTcxLjUyODg1LDYyLjIyNTk2Yy01LjE5NDExLDAgLTEwLjE4MTQ5LC0wLjMxMDEgLTE1LjA5MTM1LC0xLjI0MDM4Yy0xLjk2Mzk0LC0wLjQ2NTE0IC00LjAwNTQxLDAgLTUuNTgxNzMsMS4yNDAzOGMtNS45NjkzNSw1LjAxMzIyIC0xNS45OTU3OSwxMS4wNjAxIC0yNi42NjgyNywxNC44ODQ2MmMtNi41NjM3LDIuMzUxNTYgLTEzLjIzMDc3LDMuNDM2OSAtMTkuNDMyNjksMy43MjExNWMxLjM5NTQ0LC0xLjExMTE4IDIuNDgwNzcsLTEuOTEyMjYgNC4xMzQ2MiwtMy4zMDc2OWM2LjY2NzA3LC01LjYwNzU3IDE0LjY3Nzg4LC0xNC42NTIwNCAxNC42Nzc4OCwtMjguMzIyMTJjMCwtMS45MTIyNiAtMC44MjY5MiwtMy43MjExNSAtMi4yNzQwNCwtNC45NjE1NGMtMTMuMjMwNzcsLTExLjQyMTg3IC0yMS4yOTMyNywtMjYuOTc4MzcgLTIxLjI5MzI3LC00NC4yNDAzOGMwLC0zNC4wNTg4OSAzMS41MjY0NCwtNjIuNDMyNjkgNzEuNTI4ODUsLTYyLjQzMjY5eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
            alt="comment"
          />
          {{ hitInfo.comments }}
        </h4>
        <h4>
          <img
            src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0yMS41LDIxLjV2MTI5aDEyOXYtMTI5aC01My43NWMwLDYuMDA0ODkgLTQuNzQ1MTEsMTAuNzUgLTEwLjc1LDEwLjc1Yy02LjAwNDg4LDAgLTEwLjc1LC00Ljc0NTExIC0xMC43NSwtMTAuNzV6TTMyLjI1LDMyLjI1aDM1LjI3MzQ0YzMuNzM3MzEsNi4zNjE4MiAxMC42MDMwMywxMC43NSAxOC40NzY1NiwxMC43NWM3Ljg3MzU0LDAgMTQuNzM5MjYsLTQuMzg4MTggMTguNDc2NTYsLTEwLjc1aDM1LjI3MzQ0djEwNy41aC0xMDcuNXpNODAuNjI1LDU5LjEyNXY0NC4zNDM3NWwtMTIuMjYxNzIsLTEyLjI2MTcybC03LjcyNjU2LDcuNTU4NTlsMjUuMzYzMjgsMjUuMzYzMjhsMjUuMzYzMjgsLTI1LjM2MzI4bC03LjcyNjU2LC03LjU1ODU5bC0xMi4yNjE3MiwxMi4yNjE3MnYtNDQuMzQzNzV6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
            alt="downloads"
          />
          {{ hitInfo.downloads }}
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
import { toRefs } from "vue";

export default {
  name: "Picture",
  props: {
    hit: Object,
  },
  setup(props) {
    const { hit } = toRefs(props);
    return {
      hitInfo: hit,
      styles: {
        width: props.hit.webformatWidth - 190,
        height: props.hit.webformatHeight - 190,
      },
    };
  },
};
</script>

<style scoped>
.hidden {
  display: none;
}

.card {
  margin: 5px;
  position: relative;
  box-sizing: content-box;
  display: inline-block;
  overflow: hidden;
}

.card:hover {
  cursor: pointer;
}

.card:hover .card-description {
  background: rgba(8, 8, 8, 0.3);
  backdrop-filter: blur(4px);
  color: #fff;
  padding: 5px;
  font-size: 14px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  position: absolute;
  bottom: 0;
}

.card-description img {
  max-width: 20px;
}

.card-description #description-info {
  display: flex;
  justify-content: space-between;
  width: 30%;
}
.card-image img {
  display: block;
  max-width: 100%;
  max-height: 100%;
}
</style>
