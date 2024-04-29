import React, {
  useRef,
  useCallback,
  useEffect,
  useState,
  createContext,
  useContext,
  ReactNode,
  MutableRefObject,
} from 'react';
import {Pressable, View} from 'react-native';
import Modal, {ModalProps} from 'react-native-modal';
import {Text} from '../common/Text';
import {COLORS, SIZES} from '../../constants/theme';
import {wp, hp} from '../../utils';
import {AddIcon, CloseModalIcon} from '../../asset/svg';

type UseModalShowReturnType = {
  resolver: MutableRefObject<Function | undefined>;
  show: boolean;
  setShow: (value: boolean) => void;
  onHide: () => void;
};

const useModalShow = (): UseModalShowReturnType => {
  const resolver = useRef<Function>();
  const [show, setShow] = useState(false);

  const handleOnHide = () => {
    setShow(false);
  };

  return {
    resolver,
    show,
    setShow,
    onHide: handleOnHide,
  };
};

type ModalContextType = {
  showConfirmation: (
    title: string,
    body: string | JSX.Element,
    // headerAction: string | JSX.Element,
  ) => Promise<boolean>;
};

type CustomModalContextProviderProps = {
  children: React.ReactNode;
};

export const CustomModalContext = React.createContext<ModalContextType>(
  {} as ModalContextType,
);

const CustomModalContextProvider: React.FC<
  CustomModalContextProviderProps
> = props => {
  const {setShow, show, onHide, resolver} = useModalShow();
  const [content, setContent] = useState<{
    title: string;
    body: string | JSX.Element;
    // headerAction: string | JSX.Element;
  } | null>();

  const handleShow = (
    title: string,
    body: string | JSX.Element,
    // headerAction: string | JSX.Element,
  ): Promise<boolean> => {
    setContent({
      title,
      body,
      // headerAction,
    });
    setShow(true);
    return new Promise(function (resolve) {
      resolver.current = resolve;
    });
  };

  const modalContext: ModalContextType = {
    showConfirmation: handleShow,
  };

  const handleOk = () => {
    resolver.current && resolver.current(true);
    onHide();
  };

  const handleCancel = () => {
    resolver.current && resolver.current(false);
    onHide();
  };

  return (
    <CustomModalContext.Provider value={modalContext}>
      {props.children}
      {content && (
        <Modal
          style={{alignSelf: 'center'}}
          isVisible={show}
          animationInTiming={600}
          backdropColor={'rgba(18, 18, 18, 0.5)'}>
          <View
            style={{
              width: SIZES.width * 0.9,
              maxHeight: hp(600),
              backgroundColor: COLORS.backgroundColor,
              borderRadius: 8,
              overflow: 'hidden',
              padding: wp(20),
              paddingHorizontal: wp(40),
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                alignSelf: 'flex-end',
                paddingVertical: wp(10),
                marginVertical: hp(5),
              }}>
              <Pressable
                style={{
                  borderRadius: 8,
                  width: wp(40),
                  height: wp(40),
                  justifyContent: 'center',
                  transform: [{rotate: '45deg'}],
                }}
                onPress={handleCancel}>
                <AddIcon />
              </Pressable>
              {/* {content?.headerAction ? content?.headerAction : <View />} */}
            </View>
            {content?.body && content?.body}
          </View>
        </Modal>
      )}
    </CustomModalContext.Provider>
  );
};

const useCustomModalContext = (): ModalContextType =>
  useContext(CustomModalContext);

export {useModalShow, useCustomModalContext};

export default CustomModalContextProvider;
