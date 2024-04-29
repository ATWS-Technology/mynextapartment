import React, {
  useRef,
  useCallback,
  useEffect,
  useState,
  createContext,
  useContext,
  ReactNode,
} from 'react';
import {Pressable, View} from 'react-native';
import Modal from 'react-native-modal';
import {SIZES} from '../../constants/theme';
import {Text} from '../common/Text';
import {fontSz, hp, wp} from '../../utils';
import {InfoModalIcon, SuccessIcon, WarningIcon} from '../../asset/svg';

type UseNotificationShowReturnType = {
  show: boolean;
  setShow: (value: boolean) => void;
  onHide: () => void;
};

const useNotificationShow = (): UseNotificationShowReturnType => {
  const [show, setShow] = useState(false);

  const handleOnHide = () => {
    setShow(false);
  };

  return {
    show,
    setShow,
    onHide: handleOnHide,
  };
};

type NotificationContextType = {
  showNotification: (title: string, type?: string) => Promise<boolean>;
};

type CustomNotificationContextProviderProps = {
  children: React.ReactNode;
};

export const CustomNotificationContext = createContext<NotificationContextType>(
  {} as NotificationContextType,
);

const CustomNotificationContextProvider: React.FC<
  CustomNotificationContextProviderProps
> = props => {
  const {setShow, show, onHide} = useNotificationShow();
  const [content, setContent] = useState<{
    title: string;
    type?: string;
  } | null>();
  const resolver = useRef<Function>();

  const handleShow = (title: string, type?: string): Promise<boolean> => {
    setContent({
      title,
      type,
    });
    setShow(true);
    return new Promise(function (resolve) {
      resolver.current = resolve;
    });
  };

  const notificationContext: NotificationContextType = {
    showNotification: handleShow,
  };

  const handleOk = () => {
    resolver.current && resolver.current(true);
    onHide();
  };

  const handleCancel = () => {
    resolver.current && resolver.current(false);
    onHide();
  };

  useEffect(() => {
    let timer1 = setTimeout(() => handleCancel(), 4000);
    return () => {
      clearTimeout(timer1);
    };
  }, [show]);

  return (
    <CustomNotificationContext.Provider value={notificationContext}>
      {props.children}
      {content && (
        <Modal
          style={{
            alignSelf: 'center',
            alignItems: 'flex-start',
            position: 'absolute',
            top: 30,
          }}
          isVisible={show}
          backdropColor={'transparent'}
          hasBackdrop={true}
          // animationInTiming={600}
          onBackdropPress={() => {
            handleCancel();
          }}>
          <View
            style={{
              width: SIZES.width * 0.85,
              // height: hp(80),
              maxHeight: hp(120),
              backgroundColor:
                content?.type === 'info'
                  ? '#E3F2FC'
                  : content?.type === 'success'
                  ? 'rgba(227, 252, 243, 1)'
                  : content?.type === 'warning'
                  ? 'rgba(255, 85, 74, 0.25)'
                  : '#E3F2FC',
              borderRadius: 4,
              overflow: 'hidden',
              // padding: wp(20),
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: wp(25),
              }}>
              <Pressable
                onPress={() => {
                  handleCancel();
                }}
                style={{
                  backgroundColor:
                    content?.type === 'info'
                      ? 'rgba(13, 153, 242, 1)'
                      : content?.type === 'success'
                      ? 'rgba(11, 127, 86, 1)'
                      : content?.type === 'warning'
                      ? 'rgba(255, 85, 74, 1)'
                      : 'rgba(13, 153, 242, 1)',
                  borderRadius: 4,
                  minWidth: wp(80),
                  height: hp(80),
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  left: 0,
                }}
                // onPress={handleCancel}
              >
                {content?.type === 'info' ? (
                  <InfoModalIcon />
                ) : content?.type === 'success' ? (
                  <SuccessIcon />
                ) : content?.type === 'warning' ? (
                  <WarningIcon />
                ) : (
                  <InfoModalIcon />
                )}
              </Pressable>
              <Text
                text={content?.title && `${content?.title}`}
                fontWeight="500"
                fontSize={fontSz(12)}
                style={{textAlign: 'center', width: '90%'}}
              />
            </View>
          </View>
        </Modal>
      )}
    </CustomNotificationContext.Provider>
  );
};

const useCustomNotificationContext = (): NotificationContextType =>
  useContext(CustomNotificationContext);

export {useNotificationShow, useCustomNotificationContext};

export default CustomNotificationContextProvider;
