function registerPeople(userInfo) {
  const [userKey, userNickname] = userInfo.split(',');
  const target = document.getElementById('target');
  target.innerHTML = '';
  const formTitle = document.createElement('h5');
  formTitle.setAttribute('class', 'card-title');
  formTitle.innerText = '등록할 부원 정보 입력';
  target.appendChild(formTitle);

  const form = document.createElement('form');
  form.setAttribute('method', 'post');
  form.setAttribute('action', location.href);

  const nameGroup = document.createElement('div');
  nameGroup.setAttribute('class', 'form-group');
  const nameLabel = document.createElement('label');
  nameLabel.setAttribute('class', 'fw-bold');
  nameLabel.innerText = '이름';
  const nameField = document.createElement('input');
  nameField.setAttribute('type', 'text');
  nameField.setAttribute('name', 'name');
  nameField.setAttribute('class', 'form-control mt-sm-1');
  nameField.setAttribute('value', userNickname);
  nameGroup.append(nameLabel);
  nameGroup.append(nameField);
  form.appendChild(nameGroup);

  const studentNoGroup = document.createElement('div');
  studentNoGroup.setAttribute('class', 'form-group mt-3');
  const studentNoLabel = document.createElement('label');
  studentNoLabel.setAttribute('class', 'fw-bold');
  studentNoLabel.innerText = '입학년도(학번)';
  const studentNoField = document.createElement('input');
  studentNoField.setAttribute('type', 'number');
  studentNoField.setAttribute('name', 'studentNo');
  studentNoField.setAttribute('class', 'form-control mt-sm-1');
  studentNoGroup.append(studentNoLabel);
  studentNoGroup.append(studentNoField);
  form.appendChild(studentNoGroup);

  const userKeyGroup = document.createElement('div');
  userKeyGroup.setAttribute('class', 'form-group mt-3');
  const userKeyLabel = document.createElement('label');
  userKeyLabel.setAttribute('class', 'fw-bold');
  userKeyLabel.innerText = '식별키';
  const userKeyField = document.createElement('input');
  userKeyField.setAttribute('type', 'text');
  userKeyField.setAttribute('name', 'userKey');
  userKeyField.setAttribute('value', userKey);
  userKeyField.setAttribute('class', 'form-control mt-sm-1');
  userKeyField.setAttribute('readonly', 'readonly');
  userKeyGroup.append(userKeyLabel);
  userKeyGroup.append(userKeyField);
  form.appendChild(userKeyGroup);

  const button = document.createElement('button');
  button.setAttribute('type', 'submit');
  button.setAttribute('class', 'btn btn-success mt-4');
  button.innerText = '등록하기';
  form.appendChild(button);

  target.appendChild(form);
}

async function deletePeople(uid) {
  const deleteResult = await axios({
    method: 'delete',
    data: {
      uid,
    },
    url: location.href,
  })
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      alert('부원 삭제에 실패했습니다.');
      location.reload();
    });

  if (deleteResult.success) {
    alert('부원을 삭제했습니다.\nuid:' + deleteResult.result.uid);
    location.reload();
  } else {
    alert('부원 삭제에 실패했습니다.');
    location.reload();
  }
}

async function updatePeople(userInfo) {
  const [name, studentNo, uid] = userInfo.split(',');
  const target = document.getElementById('target');
  target.innerHTML = '';
  const formTitle = document.createElement('h5');
  formTitle.setAttribute('class', 'card-title');
  formTitle.innerText = '수정할 부원 정보 입력';
  target.appendChild(formTitle);

  const form = document.createElement('form');
  form.setAttribute('method', 'post');
  form.setAttribute('action', location.href);

  const nameGroup = document.createElement('div');
  nameGroup.setAttribute('class', 'form-group');
  const nameLabel = document.createElement('label');
  nameLabel.setAttribute('class', 'fw-bold');
  nameLabel.innerText = '이름';
  const nameField = document.createElement('input');
  nameField.setAttribute('type', 'text');
  nameField.setAttribute('name', 'name');
  nameField.setAttribute('id', 'name');
  nameField.setAttribute('class', 'form-control mt-sm-1');
  nameField.setAttribute('value', name);
  nameGroup.append(nameLabel);
  nameGroup.append(nameField);
  form.appendChild(nameGroup);

  const studentNoGroup = document.createElement('div');
  studentNoGroup.setAttribute('class', 'form-group mt-3');
  const studentNoLabel = document.createElement('label');
  studentNoLabel.setAttribute('class', 'fw-bold');
  studentNoLabel.innerText = '입학년도(학번)';
  const studentNoField = document.createElement('input');
  studentNoField.setAttribute('type', 'number');
  studentNoField.setAttribute('id', 'studentNo');
  studentNoField.setAttribute('name', 'studentNo');
  studentNoField.setAttribute('class', 'form-control mt-sm-1');
  studentNoField.setAttribute('value', studentNo);
  studentNoGroup.append(studentNoLabel);
  studentNoGroup.append(studentNoField);
  form.appendChild(studentNoGroup);

  const uidGroup = document.createElement('div');
  uidGroup.setAttribute('class', 'form-group mt-3');
  const uidLabel = document.createElement('label');
  uidLabel.setAttribute('class', 'fw-bold');
  uidLabel.innerText = 'UID';
  const uidField = document.createElement('input');
  uidField.setAttribute('type', 'text');
  uidField.setAttribute('name', 'uid');
  uidField.setAttribute('id', 'uid');
  uidField.setAttribute('value', uid);
  uidField.setAttribute('class', 'form-control mt-sm-1');
  uidField.setAttribute('readonly', 'readonly');
  uidGroup.append(uidLabel);
  uidGroup.append(uidField);
  form.appendChild(uidGroup);

  const button = document.createElement('button');
  button.setAttribute('type', 'submit');
  button.setAttribute('class', 'btn btn-success mt-4');
  button.innerText = '수정하기';
  form.appendChild(button);

  form.addEventListener('submit', async function formUpdateAction(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const studentNo = document.getElementById('studentNo').value;
    const uid = document.getElementById('uid').value.trim();

    const result = await axios({
      method: 'put',
      url: location.href,
      data: {
        name,
        studentNo,
        uid,
      },
    })
      .then((result) => {
        return result.data;
      })
      .catch((error) => {
        alert('업데이트에 실패했습니다.');
        location.reload();
      });

    if (result.success) {
      alert('업데이트에 성공했습니다.\nuid:' + result.uid);
      location.reload();
    } else {
      alert('업데이트에 실패했습니다.');
      location.reload();
    }
  });

  target.appendChild(form);
}
