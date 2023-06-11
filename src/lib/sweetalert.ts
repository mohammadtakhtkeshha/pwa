import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { theme } from 'core';
import i18next from 'i18next';

const colors = theme.colors;

const MySwal = withReactContent(Swal);

export const successToast = (item: any) => {
  return MySwal.fire({
    icon: 'success',
    title: item,
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: toast => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });
};

export const errorToast = (item: any) => {
  return MySwal.fire({
    icon: 'error',
    title: item,
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: toast => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });
};
type SuccessObj = {
  text: any;
};

export const successSwal = (item: SuccessObj) => {
  return MySwal.fire({
    title: i18next.t('gl.success'),
    text: item.text,
    icon: 'success',
    confirmButtonText: 'Done',
    confirmButtonColor: colors.gray[0],
    color: colors.gray[0],
  });
};

type ErrorObj = {
  text: string;
};

export const errorSwal = (item: any) => {
  debugger
  return MySwal.fire({
    title: 'Error!',
    text: item,
    imageWidth: 50,
  imageHeight: 50,
    icon: 'error',
    confirmButtonText: 'close',
    confirmButtonColor: colors.gray[0],
    color: colors.gray[0],
  });
};

type ConfirmObj = {
  text: string;
  confirmAction: Function;
};

export const confirmSwal = (item: ConfirmObj) => {
  return MySwal.fire({
    title: i18next.t('gl.areYouSure'),
    text: i18next.t('gl.sureDelete'),
    showDenyButton: false,
    showCancelButton: true,
    cancelButtonText: i18next.t('gl.cancel'),
    confirmButtonText: i18next.t('gl.delete'),
    confirmButtonColor: colors.red[1],
    cancelButtonColor: colors.gray[1],
    color: colors.gray[0],
  }).then(async result => {
    if (result.isConfirmed) {
      await item.confirmAction();
      if (result.isConfirmed) {
        Swal.fire({
          text: i18next.t('gl.successfullyDeleted'),
          icon: 'success',
          confirmButtonText: 'ok',
        });
      }
    }
  });
};




function showToast(title: string): void {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
  });

  Toast.fire({
    icon: 'error',
    title: title
  });
}
export default showToast

