import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Icon, Tooltip } from '../';
import { useTranslation } from 'react-i18next';

const classes = {
  infoHeader: 'text-base text-primary-light',
  infoText: 'text-base text-white max-w-24 truncate',
  firstRow: 'flex flex-col',
  row: 'flex flex-col ml-4',
};

function PatientInfo({
  patientName,
  patientSex,
  patientAge,
  MRN,
  thickness,
  spacing,
  scanner,
  isOpen,
  showPatientInfoRef,
}) {
  const { t } = useTranslation('PatientInfo');

  while (patientAge.charAt(0) === '0') {
    patientAge = patientAge.substr(1);
  }

  return (
    <div ref={showPatientInfoRef}>
      <Tooltip
        isSticky
        isDisabled={!isOpen}
        position="bottom-right"
        content={
          isOpen && (
            <div className="flex py-2">
              <div className="flex pt-1">
                <Icon name="info-link" className="w-4 text-primary-main" />
              </div>
              <div className="flex flex-col ml-2">
                <span
                  className="text-base font-bold text-black"
                  title={patientName}
                >
                  {patientName}
                </span>
                <div className="flex pb-4 mt-4 mb-4 border-b border-secondary-main">
                  <div className={classnames(classes.firstRow)}>
                    <span
                      className={classnames(classes.infoHeader)}
                      style={{ color: 'black', fontWeight: 'bold' }}
                    >
                      {t('Sex')}
                    </span>
                    <span
                      className={classnames(classes.infoText)}
                      title={patientSex}
                      style={{ color: 'black' }}
                    >
                      {patientSex}
                    </span>
                  </div>
                  <div className={classnames(classes.row)}>
                    <span
                      className={classnames(classes.infoHeader)}
                      style={{ color: 'black', fontWeight: 'bold' }}
                    >
                      {t('Age')}
                    </span>
                    <span
                      className={classnames(classes.infoText)}
                      title={patientAge}
                      style={{ color: 'black' }}
                    >
                      {patientAge}
                    </span>
                  </div>
                  <div
                    className={classnames(classes.row)}
                    style={{ color: 'black' }}
                  >
                    <span
                      className={classnames(classes.infoHeader)}
                      style={{ color: 'black', fontWeight: 'bold' }}
                    >
                      {t('MRN')}
                    </span>
                    <span
                      className={classnames(classes.infoText)}
                      title={MRN}
                      style={{ color: 'black' }}
                    >
                      {MRN}
                    </span>
                  </div>
                </div>
                <div className="flex">
                  <div className={classnames(classes.firstRow)}>
                    <span
                      className={classnames(classes.infoHeader)}
                      style={{ color: 'black', fontWeight: 'bold' }}
                    >
                      {t('Thickness')}
                    </span>
                    <span
                      className={classnames(classes.infoText)}
                      title={thickness}
                      style={{ color: 'black' }}
                    >
                      {thickness}
                    </span>
                  </div>
                  <div className={classnames(classes.row)}>
                    <span
                      className={classnames(classes.infoHeader)}
                      style={{ color: 'black', fontWeight: 'bold' }}
                    >
                      {t('Spacing')}
                    </span>
                    <span
                      className={classnames(classes.infoText)}
                      title={spacing}
                      style={{ color: 'black' }}
                    >
                      {spacing}
                    </span>
                  </div>
                  <div className={classnames(classes.row)}>
                    <span
                      className={classnames(classes.infoHeader)}
                      style={{ color: 'black', fontWeight: 'bold' }}
                    >
                      {t('Scanner')}
                    </span>
                    <span
                      className={classnames(classes.infoText)}
                      title={scanner}
                      style={{ color: 'black' }}
                    >
                      {scanner}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      >
        <div className="relative flex justify-end cursor-pointer">
          <div className="relative">
            <Icon name="profile" className="w-5 text-white" />
            <Icon
              name="info-link"
              className="absolute w-5 text-white bg-black"
              style={{ right: -7, bottom: -10 }}
            />
          </div>
        </div>
      </Tooltip>
    </div>
  );
}

PatientInfo.propTypes = {
  patientName: PropTypes.string,
  patientSex: PropTypes.string,
  patientAge: PropTypes.string,
  MRN: PropTypes.string,
  thickness: PropTypes.string,
  spacing: PropTypes.string,
  scanner: PropTypes.string,
  isOpen: PropTypes.bool,
  showPatientInfoRef: PropTypes.object,
};

export default PatientInfo;
