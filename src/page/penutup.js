import React, { Component } from 'react';
import MyBottomNavigation from '../component/bottomnav';
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Button } from 'reactstrap';

class Penutup extends Component {
    state = { openModal: false, }
    render() {
        return (<div>
            <div style={{
                textAlign: "center",
                padding: "50px",
            }}>
                Ucapan selamat dan kebahagiaan bisa dari mana saja. <br />Tanpa jabatan tangan atau pelukan hangat, masih ada <br />simpul senyum dan doa-doa baik yang kami harapkan.<br />
                Semoga Allah SWT memberikan keberkahan dan<br /> menjadikan kedua mempelai keluarga Sakinah Mawaddah Warohmah.<br />
                silahkan klik disini untuk mengirim doa kepada pada mempelai <br />
                <Button onClick={() => this.setState({ openModal: true })}>
                    Tulis ucapan dan doa
                </Button>
                <Modal isOpen={this.state.openModal}>
                    <ModalHeader>tulis ucapan dan doa </ModalHeader>
                    <ModalBody>
                        <Label>
                            Nama
                        </Label>
                        <Input type='text' innerRef={(title) => this.title = title} />
                        <Label>
                            Isi Ucapan
                        </Label>
                        <Input type='text' innerRef={(directorMov) => this.directorMov = directorMov} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={() => this.setState({ openModal: false })}>Cancel</Button>
                        <Button color="primary" onClick={() => this.setState({ openModal: false })}>Confirm</Button>
                    </ModalFooter>
                </Modal>
                <MyBottomNavigation />
            </div>
        </div>);
    }
}

export default Penutup;