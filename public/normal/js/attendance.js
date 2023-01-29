let responseData;

window.addEventListener('DOMContentLoaded', async function () {
  const id = new URLSearchParams(location.search).get('id');
  const data = await axios({
    method: 'get',
    url: location.href.slice(0, location.href.indexOf('?')) + '/' + id,
  }).then((value) => value.data);

  responseData = data;

  const table = document.createElement('table');
  table.setAttribute('class', 'table text-start');
  table.setAttribute('id', 'attendance-table');
  table.innerHTML += `
  <thead>
    <tr>
      <th>컬럼명</th>
      <th>종류</th>
      <th>날짜 선택</th>
    </tr>
  </thead>`;
  data.data.columns.forEach((value) => {
    let row = `
    <tr>
      <td>${value}</td>
      <td>
        <select class="form-select" id="kind">
          <option value="not">해당 없음</option>
          <option value="name">이름</option>
          <option value="studentNo">입학년도</option>
          <option value="integrated">출석-통합</option>
          <option value="seoul">출석-명륜</option>
          <option value="suwon">출석-율전</option>
        </select>
      </td>
      <td>
        <input type="date" id="date" class="form-control"> 
      </td>
    </tr>`;
    table.innerHTML += row;
  });
  document.getElementById('app').appendChild(table);
});

let index = {
  name: undefined,
  studentNo: undefined,
  attendances: [],
};

async function validation() {
  const table = document.getElementById('attendance-table');
  const bodies = table.getElementsByTagName('tbody');
  for (let i = 0; i < bodies.length; i++) {
    target = bodies[i].querySelector('#kind').value;

    if (target === 'name') {
      index.name = i;
    } else if (target === 'studentNo') {
      index.studentNo = i;
    } else if (
      target === 'integrated' ||
      target === 'seoul' ||
      target === 'suwon'
    ) {
      const date = bodies[i].querySelector('#date').value;
      index.attendances.push({ index: i, target, date });
    } else {
      continue;
    }
  }

  const message = [];

  if (index.name === undefined) {
    message.push('이름 컬럼을 선택하지 않았습니다.');
  }

  if (index.studentNo === undefined) {
    message.push('입학년도 컬럼을 선택하지 않았습니다.');
  }

  if (index.attendances.length === 0) {
    message.push('출석 컬럼들을 선택하지 않았습니다.');
  }

  index.attendances.forEach((value) => {
    if (value.date === '') {
      message.push('출석 컬럼에 날짜를 선택하지 않았습니다.');
    }
  });

  if (message.length !== 0) {
    alert(message.join('\n'));
    index.attendances = [];
    index.name = undefined;
    index.studentNo = undefined;
  } else {
    openLoading();
    await register();
    closeLoading();
  }
}

async function register() {
  const requestObj = [];
  const columns = responseData.data.columns;
  const attendances = responseData.data.attendances;

  attendances.forEach((item) => {
    index.attendances.forEach((value) => {
      const colIndex = value.index;
      const location = value.target;
      const date = value.date;
      requestObj.push({
        name: item[columns[index.name]],
        studentNo: item[columns[index.studentNo]],
        date,
        location,
        survey: item[columns[colIndex]].indexOf('불참') === -1 ? true : false,
        late: item[columns[colIndex]].indexOf('늦참') === -1 ? false : true,
      });
    });
  });

  const response = await axios({
    method: 'post',
    data: {
      attendances: requestObj,
    },
    url: location.href.slice(0, location.href.indexOf('?')),
  })
    .then((value) => {
      return value.data;
    })
    .catch((error) => {
      alert('출석 등록에 실패했습니다.');
      location.replace(location.href.slice(0, location.href.lastIndexOf('/')));
    });

  if (response.success) {
    alert(`총 ${response.count}개 등록되었습니다.`);
    location.replace(location.href.slice(0, location.href.lastIndexOf('/')));
  } else {
    alert('출석 등록에 실패했습니다.');
    location.replace(location.href.slice(0, location.href.lastIndexOf('/')));
  }
}

// 로딩창 키는 함수
function openLoading() {
  //화면 높이와 너비를 구합니다.
  let maskHeight = $(document).height();
  let maskWidth = window.document.body.clientWidth;
  //출력할 마스크를 설정해준다.
  let mask =
    "<div id='mask' style='position:absolute; z-index:9000; background-color:#000000; display:none; left:0; top:0;'></div>";
  // 로딩 이미지 주소 및 옵션
  let loadingImg = '';
  loadingImg +=
    "<div id='loadingImg' style='position:absolute; top: calc(50% - (200px / 2)); width:100%; z-index:99999999;'>";
  loadingImg +=
    " <img src='/public/img/loading.gif' style='position: relative; display: block; margin: 0px auto;'/>";
  loadingImg += '</div>';
  //레이어 추가
  $('body').append(mask).append(loadingImg);
  //마스크의 높이와 너비로 전체 화면을 채운다.
  $('#mask').css({
    width: maskWidth,
    height: maskHeight,
    opacity: '0.3',
  });
  //마스크 표시
  $('#mask').show();
  //로딩 이미지 표시
  $('#loadingImg').show();
}

// 로딩창 끄는 함수
function closeLoading() {
  $('#mask, #loadingImg').hide();
  $('#mask, #loadingImg').empty();
}
