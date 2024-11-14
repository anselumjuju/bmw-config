import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, Textarea } from "@nextui-org/react";
import { useState } from "react";
import { toast } from "react-toastify";
import PrimaryButton from "./ui/PrimaryButton";
import { sendEmail } from "../utils/functions";

const EmailModal = ({ isOpen, onOpenChange }) => {
	const [emailDetails, setEmailDetails] = useState({});

	const handleSubmit = (onClose) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!emailDetails.name || !emailDetails.email || !emailDetails.message || !emailRegex.test(emailDetails.email)) {
			toast.error('Please provide valid informations.');
			return;
		}
		sendEmail(emailDetails);
		setEmailDetails({})
		onClose();
	}

	return (
		<>
			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				placement="center"
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">Get In Touch</ModalHeader>
							<ModalBody>
								<Input
									autoFocus
									label="Name"
									isRequired
									variant="bordered"
									radius="sm"
									defaultValue={emailDetails.name}
									onValueChange={(e) => setEmailDetails({ ...emailDetails, name: e })}
								/>
								<Input
									label="Email"
									type="email"
									isRequired
									variant="bordered"
									radius="sm"
									defaultValue={emailDetails.email}
									onValueChange={(e) => setEmailDetails({ ...emailDetails, email: e })}
								/>
								<Textarea
									label="Message"
									minRows={4}
									isRequired
									variant="bordered"
									radius="sm"
									defaultValue={emailDetails.message}
									onValueChange={(e) => setEmailDetails({ ...emailDetails, message: e })}
								/>
							</ModalBody>
							<ModalFooter>
								<PrimaryButton text={'Submit'} onClick={() => handleSubmit(onClose)} className={'py-0'} />
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}

export default EmailModal