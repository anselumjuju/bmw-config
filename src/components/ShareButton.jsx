import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, Textarea } from "@nextui-org/react";

const ShareButton = ({ isOpen, onOpenChange }) => {

	const handleSubmit = (onClose) => {
		console.log("Submitted");
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
									variant="bordered"
									radius="sm"
								/>
								<Input
									label="Email"
									variant="bordered"
									radius="sm"
								/>
								<Textarea
									label="Message"
									minRows={4}
									variant="bordered"
									radius="sm"
								/>
							</ModalBody>
							<ModalFooter>
								<button
									className="text-sm bg-neutral-800 text-white py-2 px-6 rounded-lg hover:bg-neutral-700 transition-all duration-200"
									onClick={() => handleSubmit(onClose)}
								>
									Submit
								</button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}

export default ShareButton